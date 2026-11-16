export const STORAGE_KEY = 'parolas:state:v1'
/** Chiave usata dalle versioni precedenti dell'app, prima del cambio nome. */
const LEGACY_STORAGE_KEY = 'lingua:state:v1'

export interface ProgressRecord {
  completed: boolean
  bestScore: number
  lastScore: number
  attempts: number
  lastAt: number
}

export interface CourseProgress {
  lessons: Record<string, ProgressRecord>
  grammar: Record<string, ProgressRecord>
}

export interface ReviewItem {
  /** Formato: courseId:exerciseId */
  key: string
  courseId: string
  addedAt: number
  misses: number
}

export interface AISettings {
  enabled: boolean
  baseUrl: string
  apiKey: string
  model: string
}

export type ThemeMode = 'auto' | 'light' | 'dark'
export type PaletteId = 'viola' | 'corallo' | 'verde' | 'oceano'

export const THEME_MODES: ThemeMode[] = ['auto', 'light', 'dark']
export const PALETTE_IDS: PaletteId[] = ['viola', 'corallo', 'verde', 'oceano']

export interface Settings {
  ttsRate: number
  /** courseId -> voiceURI */
  voices: Record<string, string>
  ai: AISettings
  theme: ThemeMode
  palette: PaletteId
}

export interface AppState {
  version: 1
  activeCourseId: string | null
  courses: Record<string, CourseProgress>
  review: ReviewItem[]
  settings: Settings
}

export function createInitialState(): AppState {
  return {
    version: 1,
    activeCourseId: null,
    courses: {},
    review: [],
    settings: {
      ttsRate: 0.95,
      voices: {},
      ai: {
        enabled: false,
        baseUrl: 'https://api.openai.com/v1',
        apiKey: '',
        model: 'gpt-4o-mini',
      },
      theme: 'auto',
      palette: 'viola',
    },
  }
}

export function emptyCourseProgress(): CourseProgress {
  return { lessons: {}, grammar: {} }
}

export function loadState(): AppState {
  const base = createInitialState()
  try {
    const current = window.localStorage.getItem(STORAGE_KEY)
    const legacy = current ? null : window.localStorage.getItem(LEGACY_STORAGE_KEY)
    const raw = current ?? legacy
    if (!raw) return base
    const parsed = JSON.parse(raw) as Partial<AppState> | null
    if (!parsed || parsed.version !== 1) return base
    const stored: Partial<Settings> = parsed.settings ?? {}
    const state: AppState = {
      ...base,
      ...parsed,
      version: 1,
      courses: parsed.courses ?? {},
      review: Array.isArray(parsed.review) ? parsed.review : [],
      settings: {
        ...base.settings,
        ...stored,
        voices: { ...base.settings.voices, ...(stored.voices ?? {}) },
        ai: { ...base.settings.ai, ...(stored.ai ?? {}) },
        theme: THEME_MODES.includes(stored.theme as ThemeMode)
          ? (stored.theme as ThemeMode)
          : base.settings.theme,
        palette: PALETTE_IDS.includes(stored.palette as PaletteId)
          ? (stored.palette as PaletteId)
          : base.settings.palette,
      },
    }
    // Migrazione dalla chiave precedente: si conservano i progressi esistenti.
    if (!current && legacy) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
        window.localStorage.removeItem(LEGACY_STORAGE_KEY)
      } catch {
        // Se la scrittura non è possibile, lo stato resta leggibile dalla vecchia chiave.
      }
    }
    return state
  } catch {
    return base
  }
}

export function saveState(state: AppState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Lo spazio di archiviazione può essere pieno o disabilitato: l'app resta usabile.
  }
}
