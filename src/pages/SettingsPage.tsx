import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { CourseMark } from '../components/CourseMark'
import { courses } from '../content'
import { backupFileName, buildBackup, parseBackup } from '../lib/backup'
import { speak } from '../lib/speech'
import type { AISettings, PaletteId, Settings, ThemeMode } from '../lib/storage'
import { paletteOptions, themeOptions } from '../lib/theme'
import { useVoices } from '../lib/useSpeech'
import { useApp } from '../state/AppContext'

const samples: Record<string, string> = {
  en: 'Hello! This is a test of the voice.',
  es: '¡Hola! Esta es una prueba de voz.',
  fr: 'Bonjour ! Ceci est un test de la voix.',
  de: 'Hallo! Das ist ein Test der Stimme.',
}

export function SettingsPage() {
  const { state, dispatch } = useApp()
  const navigate = useNavigate()
  const voices = useVoices()
  const [aiDraft, setAiDraft] = useState<AISettings>(state.settings.ai)
  const [saved, setSaved] = useState(false)
  const [showKey, setShowKey] = useState(false)
  const backupInput = useRef<HTMLInputElement>(null)
  const [backupNote, setBackupNote] = useState<string | null>(null)
  const [backupError, setBackupError] = useState<string | null>(null)
  const activeCourse = state.activeCourseId
    ? courses.find((course) => course.id === state.activeCourseId)
    : undefined
  const visibleCourses = activeCourse ? [activeCourse] : courses

  useEffect(() => {
    setAiDraft(state.settings.ai)
  }, [state.settings.ai])

  function updateSettings(patch: Partial<Settings>) {
    dispatch({ type: 'updateSettings', patch })
  }

  function setTheme(theme: ThemeMode) {
    updateSettings({ theme })
  }

  function setPalette(palette: PaletteId) {
    updateSettings({ palette })
  }

  function setVoice(courseId: string, voiceURI: string) {
    const next = { ...state.settings.voices }
    if (voiceURI) next[courseId] = voiceURI
    else delete next[courseId]
    updateSettings({ voices: next })
  }

  function saveAI(event: FormEvent) {
    event.preventDefault()
    dispatch({
      type: 'updateSettings',
      patch: {
        ai: {
          ...aiDraft,
          baseUrl: aiDraft.baseUrl.trim(),
          model: aiDraft.model.trim(),
          apiKey: aiDraft.apiKey.trim(),
        },
      },
    })
    setSaved(true)
  }

  function exportBackup() {
    const backup = buildBackup(state)
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = backupFileName()
    document.body.append(link)
    link.click()
    link.remove()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)

    const lessons = Object.keys(backup.state.courses).reduce(
      (total, courseId) => total + Object.keys(backup.state.courses[courseId].lessons).length,
      0,
    )
    const reviewCount = backup.state.review.length
    const reviewLabel = reviewCount === 1 ? 'voce' : 'voci'
    setBackupError(null)
    setBackupNote(
      `Backup scaricato: ${lessons} ${lessons === 1 ? 'lezione' : 'lezioni'} e ${reviewCount} ${reviewLabel} in ripasso.`,
    )
  }

  async function importBackup(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    // Permette di scegliere di nuovo lo stesso file in un secondo momento.
    event.target.value = ''
    if (!file) return

    if (file.size > 2_000_000) {
      setBackupNote(null)
      setBackupError('Il file è troppo grande per essere un backup di Parolas.')
      return
    }

    let text: string
    try {
      text = await file.text()
    } catch {
      setBackupNote(null)
      setBackupError('Non riesco a leggere il file.')
      return
    }

    const parsed = parseBackup(text)
    if (!parsed.ok) {
      setBackupNote(null)
      setBackupError(parsed.error)
      return
    }

    const exported = new Date(parsed.file.exportedAt)
    const when = Number.isNaN(exported.getTime())
      ? 'questo backup'
      : `il backup del ${exported.toLocaleDateString('it-IT')}`
    if (!window.confirm(`Importare ${when}? I progressi attuali verranno sostituiti.`)) {
      return
    }

    const restored = parsed.file.state
    const activeCourseId =
      restored.activeCourseId &&
      courses.some((course) => course.id === restored.activeCourseId)
        ? restored.activeCourseId
        : null

    dispatch({
      type: 'restoreBackup',
      state: {
        ...restored,
        activeCourseId,
        // La chiave API non è nel backup: si conserva quella già configurata qui.
        settings: {
          ...restored.settings,
          ai: { ...restored.settings.ai, apiKey: state.settings.ai.apiKey },
        },
      },
    })
    setBackupError(null)
    const lessonLabel = parsed.stats.lessons === 1 ? 'lezione' : 'lezioni'
    const grammarLabel = parsed.stats.grammar === 1 ? 'scheda' : 'schede'
    setBackupNote(
      `Backup importato: ${parsed.stats.lessons} ${lessonLabel} e ${parsed.stats.grammar} ${grammarLabel} di grammatica.`,
    )
  }

  return (
    <div className="page settings-page">
      <header className="welcome">
        <span className="eyebrow">Impostazioni</span>
        <h1>Aspetto, ascolto, assistente e dati.</h1>
        <p className="lede">
          Tutto quello che non serve per imparare resta fuori. Qui ci sono solo le opzioni che
          cambiano davvero l'esperienza.
        </p>
      </header>

      <section className="card panel">
        <h2>Aspetto</h2>
        <p className="muted">
          Scegli se seguire il tema del sistema o forzare chiaro e scuro, poi decidi il colore
          principale dell'app. Le modifiche si applicano subito e restano salvate sul dispositivo.
        </p>

        <div className="appearance-block">
          <div className="appearance-label">Tema</div>
          <div className="theme-options" role="radiogroup" aria-label="Tema">
            {themeOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={state.settings.theme === option.id}
                className={`theme-choice${state.settings.theme === option.id ? ' is-active' : ''}`}
                onClick={() => setTheme(option.id)}
              >
                <span className={`theme-swatch is-${option.id}`} aria-hidden="true" />
                <strong>{option.label}</strong>
                <small>{option.hint}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="appearance-block">
          <div className="appearance-label">Palette</div>
          <div className="palette-options" role="radiogroup" aria-label="Palette colori">
            {paletteOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={state.settings.palette === option.id}
                className={`palette-choice${state.settings.palette === option.id ? ' is-active' : ''}`}
                onClick={() => setPalette(option.id)}
              >
                <span
                  className="palette-dot"
                  aria-hidden="true"
                  style={{
                    background: `linear-gradient(135deg, ${option.preview} 0 50%, ${option.previewDark} 50% 100%)`,
                  }}
                />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeCourse && (
        <section className="card panel">
          <h2>Lingua selezionata</h2>
          <div className="voice-row">
            <div className="voice-name">
              <CourseMark course={activeCourse} />
              <div>
                <strong>{activeCourse.name}</strong>
                <span className="muted small"> {activeCourse.nativeName}</span>
              </div>
            </div>
            <span className="muted small">
              Le altre lingue restano nascoste finché non torni al menù iniziale.
            </span>
            <button
              type="button"
              className="btn btn-secondary btn-small"
              onClick={() => {
                dispatch({ type: 'setActiveCourse', courseId: null })
                navigate('/')
              }}
            >
              Cambia lingua
            </button>
          </div>
        </section>
      )}

      <section className="card panel">
        <h2>Ascolto</h2>
        <p className="muted">
          La voce è quella del tuo browser o sistema operativo. Se una lingua non si sente,
          installa una voce dal sistema (nelle impostazioni di Windows, macOS o Android).
        </p>
        <label className="field">
          <span>
            Velocità della voce <strong>{Math.round(state.settings.ttsRate * 100)}%</strong>
          </span>
          <input
            type="range"
            min="0.6"
            max="1.2"
            step="0.05"
            value={state.settings.ttsRate}
            onChange={(event) => updateSettings({ ttsRate: Number(event.target.value) })}
          />
        </label>

        <div className="voice-list">
          {visibleCourses.map((course) => {
            const base = course.ttsLang.split('-')[0] ?? course.ttsLang
            const matching = voices.filter(
              (voice) => voice.lang === course.ttsLang || voice.lang.startsWith(base),
            )
            return (
              <div className="voice-row" key={course.id}>
                <div className="voice-name">
                  <CourseMark course={course} />
                  <strong>{course.name}</strong>
                </div>
                <select
                  className="select"
                  value={state.settings.voices[course.id] ?? ''}
                  onChange={(event) => setVoice(course.id, event.target.value)}
                  aria-label={`Voce per ${course.name}`}
                >
                  <option value="">Automatica</option>
                  {matching.map((voice) => (
                    <option value={voice.voiceURI} key={voice.voiceURI}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="btn btn-secondary btn-small"
                  onClick={() =>
                    speak(
                      samples[course.id] ?? course.nativeName,
                      course.ttsLang,
                      state.settings.ttsRate,
                      state.settings.voices[course.id],
                    )
                  }
                >
                  Prova
                </button>
              </div>
            )
          })}
        </div>
        {voices.length === 0 && (
          <p className="hint">
            Il browser non ha ancora caricato le voci. Se il problema resta, il dispositivo non
            ha voci installate per queste lingue.
          </p>
        )}
      </section>

      <section className="card panel">
        <h2>Assistente AI (opzionale)</h2>
        <p className="muted">
          Nelle lezioni e nelle schede di grammatica puoi fare domande extra a un modello
          linguistico. È disattivato per impostazione predefinita: servono una connessione e una
          chiave API compatibile con OpenAI. Le FAQ restano disponibili offline.
        </p>
        <form className="settings-form" onSubmit={saveAI}>
          <label className="field field-inline">
            <input
              type="checkbox"
              checked={aiDraft.enabled}
              onChange={(event) => {
                setAiDraft({ ...aiDraft, enabled: event.target.checked })
                setSaved(false)
              }}
            />
            <span>Abilita l'assistente nelle lezioni</span>
          </label>

          <label className="field">
            <span>URL base (API compatibile OpenAI)</span>
            <input
              className="text-input"
              value={aiDraft.baseUrl}
              onChange={(event) => {
                setAiDraft({ ...aiDraft, baseUrl: event.target.value })
                setSaved(false)
              }}
              placeholder="https://api.openai.com/v1"
              autoComplete="off"
              spellCheck={false}
            />
          </label>

          <label className="field">
            <span>Modello</span>
            <input
              className="text-input"
              value={aiDraft.model}
              onChange={(event) => {
                setAiDraft({ ...aiDraft, model: event.target.value })
                setSaved(false)
              }}
              placeholder="gpt-4o-mini"
              autoComplete="off"
              spellCheck={false}
            />
          </label>

          <label className="field">
            <span>Chiave API</span>
            <div className="key-row">
              <input
                className="text-input"
                type={showKey ? 'text' : 'password'}
                value={aiDraft.apiKey}
                onChange={(event) => {
                  setAiDraft({ ...aiDraft, apiKey: event.target.value })
                  setSaved(false)
                }}
                placeholder="sk-…"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="button"
                className="btn btn-ghost btn-small"
                onClick={() => setShowKey((value) => !value)}
              >
                {showKey ? 'Nascondi' : 'Mostra'}
              </button>
            </div>
          </label>

          <div className="settings-actions">
            <button type="submit" className="btn btn-primary">
              Salva configurazione
            </button>
            {saved && <span className="saved-note">Salvata.</span>}
          </div>
          <p className="hint">
            La chiave viene salvata nel localStorage di questo browser e inviata direttamente al
            provider scelto. Non passa da nessun server dell'app. Se usi un computer condiviso,
            non salvarla.
          </p>
        </form>
      </section>

      <section className="card panel">
        <h2>Dati e progressi</h2>
        <p className="muted">
          I progressi sono salvati solo su questo dispositivo. Non esiste un account e non c'è
          sincronizzazione tra PC e telefono.
        </p>
        <div className="backup-block">
          <h3>Backup dei dati</h3>
          <p className="hint">
            Scarica un file con lezioni svolte, coda di ripasso e impostazioni. Serve se cambi
            telefono, cancelli i dati del browser o vuoi conservarne una copia. La chiave API
            dell'assistente non viene inclusa nel file.
          </p>
          <div className="settings-actions">
            <button type="button" className="btn btn-secondary" onClick={exportBackup}>
              Scarica backup
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => backupInput.current?.click()}
            >
              Importa backup
            </button>
            <input
              ref={backupInput}
              type="file"
              accept="application/json,.json"
              hidden
              onChange={importBackup}
            />
          </div>
          {backupNote && (
            <p className="saved-note" role="status">
              {backupNote}
            </p>
          )}
          {backupError && (
            <p className="error-note" role="alert">
              {backupError}
            </p>
          )}
        </div>

        <div className="reset-list">
          {visibleCourses.map((course) => (
            <div className="reset-row" key={course.id}>
              <span>
                <CourseMark course={course} /> {course.name}
              </span>
              <button
                type="button"
                className="btn btn-ghost btn-small"
                onClick={() => {
                  if (window.confirm(`Azzerare i progressi di ${course.name}?`)) {
                    dispatch({ type: 'resetCourse', courseId: course.id })
                  }
                }}
              >
                Azzera
              </button>
            </div>
          ))}
        </div>
        <div className="settings-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              if (window.confirm('Azzerare tutti i progressi e la coda di ripasso?')) {
                dispatch({ type: 'resetProgress' })
              }
            }}
          >
            Azzera tutti i progressi
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              if (
                window.confirm(
                  'Ripristinare tutto? Verranno cancellati progressi, ripasso e impostazioni.',
                )
              ) {
                dispatch({ type: 'resetAll' })
                setSaved(false)
              }
            }}
          >
            Ripristina tutto
          </button>
        </div>
      </section>

      <section className="card panel">
        <h2>App e offline</h2>
        <p className="prose">
          Parolas è una PWA: dopo la prima visita puoi installarla dal menu del browser
          («Installa app» o «Aggiungi alla schermata Home») e usarla senza connessione. I
          contenuti delle lezioni sono inclusi nell'app.
        </p>
        <p className="prose">
          Su Windows e Android l'installazione è disponibile da Chrome o Edge quando il sito è
          servito in HTTPS (o da localhost). Su iPhone si usa Safari → Condividi → «Aggiungi a
          Home».
        </p>
        <p className="hint">Versione 0.1.0 · Contenuti A1→A2 · Nessuna gamification.</p>
      </section>
    </div>
  )
}
