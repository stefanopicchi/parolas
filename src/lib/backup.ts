import {
  PALETTE_IDS,
  THEME_MODES,
  createInitialState,
  emptyCourseProgress,
} from './storage'
import type {
  AppState,
  CourseProgress,
  PaletteId,
  ProgressRecord,
  ReviewItem,
  ThemeMode,
} from './storage'

export const BACKUP_APP = 'parolas'
export const BACKUP_FORMAT = 1

export interface BackupFile {
  app: typeof BACKUP_APP
  kind: 'backup'
  format: number
  exportedAt: string
  state: AppState
}

export interface BackupStats {
  courses: number
  lessons: number
  grammar: number
  review: number
  /** Lezioni e schede di grammatica con una sessione svolta. */
  sessions: number
}

export type ParsedBackup =
  | { ok: true; file: BackupFile; stats: BackupStats }
  | { ok: false; error: string }

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function numberOr(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

function scoreOr(value: unknown, fallback: number): number {
  return Math.min(100, Math.max(0, Math.round(numberOr(value, fallback))))
}

function readRecords(value: unknown): Record<string, ProgressRecord> {
  const records: Record<string, ProgressRecord> = {}
  if (!isObject(value)) return records
  for (const [id, entry] of Object.entries(value)) {
    if (!isObject(entry)) continue
    records[id] = {
      completed: entry.completed === true,
      bestScore: scoreOr(entry.bestScore, 0),
      lastScore: scoreOr(entry.lastScore, 0),
      attempts: Math.max(0, Math.round(numberOr(entry.attempts, 0))),
      lastAt: Math.max(0, Math.round(numberOr(entry.lastAt, 0))),
    }
  }
  return records
}

function readReview(value: unknown): ReviewItem[] {
  if (!Array.isArray(value)) return []
  const review: ReviewItem[] = []
  for (const entry of value) {
    if (!isObject(entry)) continue
    if (typeof entry.key !== 'string' || typeof entry.courseId !== 'string') continue
    review.push({
      key: entry.key,
      courseId: entry.courseId,
      addedAt: Math.max(0, Math.round(numberOr(entry.addedAt, 0))),
      misses: Math.max(1, Math.round(numberOr(entry.misses, 1))),
    })
  }
  return review
}

/**
 * Costruisce il file di backup. La chiave API dell'assistente viene esclusa
 * di proposito: il file può essere copiato o condiviso senza esporla.
 */
export function buildBackup(state: AppState, now = new Date()): BackupFile {
  return {
    app: BACKUP_APP,
    kind: 'backup',
    format: BACKUP_FORMAT,
    exportedAt: now.toISOString(),
    state: {
      ...state,
      version: 1,
      settings: {
        ...state.settings,
        ai: { ...state.settings.ai, apiKey: '' },
      },
    },
  }
}

export function backupFileName(now = new Date()): string {
  const pad = (value: number) => String(value).padStart(2, '0')
  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
  return `parolas-backup-${date}.json`
}

export function countBackup(file: BackupFile): BackupStats {
  const stats: BackupStats = {
    courses: 0,
    lessons: 0,
    grammar: 0,
    review: file.state.review.length,
    sessions: 0,
  }
  for (const course of Object.values(file.state.courses)) {
    stats.courses += 1
    stats.lessons += Object.keys(course.lessons).length
    stats.grammar += Object.keys(course.grammar).length
  }
  stats.sessions = stats.lessons + stats.grammar
  return stats
}

/**
 * Legge e normalizza un backup. Accetta anche un semplice stato salvato, così
 * un vecchio export manuale del localStorage resta importabile.
 */
export function parseBackup(text: string): ParsedBackup {
  let raw: unknown
  try {
    raw = JSON.parse(text)
  } catch {
    return { ok: false, error: 'Il file non contiene un JSON valido.' }
  }
  if (!isObject(raw)) {
    return { ok: false, error: 'Il file non è un backup di Parolas.' }
  }
  if (raw.app !== undefined && raw.app !== BACKUP_APP) {
    return { ok: false, error: 'Il file non è un backup di Parolas.' }
  }
  if (raw.format !== undefined && raw.format !== BACKUP_FORMAT) {
    return { ok: false, error: 'Backup creato da una versione non compatibile dell’app.' }
  }

  const candidate = isObject(raw.state) ? raw.state : raw
  if (candidate.version !== 1) {
    return { ok: false, error: 'Backup creato da una versione non compatibile dell’app.' }
  }

  const base = createInitialState()
  const storedSettings = isObject(candidate.settings) ? candidate.settings : {}
  const storedAi = isObject(storedSettings.ai) ? storedSettings.ai : {}
  const storedVoices = isObject(storedSettings.voices) ? storedSettings.voices : {}

  const voices: Record<string, string> = {}
  for (const [courseId, voice] of Object.entries(storedVoices)) {
    if (typeof voice === 'string' && voice) voices[courseId] = voice
  }

  const theme = THEME_MODES.includes(storedSettings.theme as ThemeMode)
    ? (storedSettings.theme as ThemeMode)
    : base.settings.theme
  const palette = PALETTE_IDS.includes(storedSettings.palette as PaletteId)
    ? (storedSettings.palette as PaletteId)
    : base.settings.palette

  const courses: Record<string, CourseProgress> = {}
  if (isObject(candidate.courses)) {
    for (const [courseId, value] of Object.entries(candidate.courses)) {
      if (!isObject(value)) continue
      const course = emptyCourseProgress()
      course.lessons = readRecords(value.lessons)
      course.grammar = readRecords(value.grammar)
      courses[courseId] = course
    }
  }

  const state: AppState = {
    version: 1,
    activeCourseId:
      typeof candidate.activeCourseId === 'string' && candidate.activeCourseId
        ? candidate.activeCourseId
        : null,
    courses,
    review: readReview(candidate.review),
    settings: {
      ttsRate: Math.min(1.5, Math.max(0.5, numberOr(storedSettings.ttsRate, base.settings.ttsRate))),
      voices,
      ai: {
        enabled: storedAi.enabled === true,
        baseUrl:
          typeof storedAi.baseUrl === 'string' && storedAi.baseUrl.trim()
            ? storedAi.baseUrl.trim()
            : base.settings.ai.baseUrl,
        apiKey: '',
        model:
          typeof storedAi.model === 'string' && storedAi.model.trim()
            ? storedAi.model.trim()
            : base.settings.ai.model,
      },
      theme,
      palette,
    },
  }

  const exportedAt =
    typeof raw.exportedAt === 'string' && raw.exportedAt ? raw.exportedAt : new Date().toISOString()
  const file: BackupFile = {
    app: BACKUP_APP,
    kind: 'backup',
    format: BACKUP_FORMAT,
    exportedAt,
    state,
  }

  return { ok: true, file, stats: countBackup(file) }
}
