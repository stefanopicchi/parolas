import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CourseMark } from '../components/CourseMark'
import { CheckIcon, SpeakerIcon } from '../components/icons'
import { ProgressBar } from '../components/ProgressBar'
import { courseById, courses, vocabularyForCourse } from '../content'
import { lookupGlossary } from '../content/glossary'
import type { VocabularyItem } from '../content'
import type { Course } from '../content/types'
import { speak } from '../lib/speech'
import {
  acceptableAnswers,
  checkVocabularyAnswer,
  newVocabularySeed,
  pickVocabularySession,
  vocabularyPrompt,
  vocabularySolution,
  VOCAB_SESSION_SIZE,
} from '../lib/vocab'
import type { VocabDirection } from '../lib/vocab'
import { useApp } from '../state/AppContext'

type Phase = 'start' | 'play' | 'done'

interface Attempt {
  item: VocabularyItem
  correct: boolean
  given: string
}

export function VocabularyPage() {
  const { state, dispatch } = useApp()
  const course = state.activeCourseId ? courseById.get(state.activeCourseId) : undefined
  const items = useMemo(() => (course ? vocabularyForCourse(course) : []), [course])

  const [direction, setDirection] = useState<VocabDirection>('toItalian')
  const [phase, setPhase] = useState<Phase>('start')
  const [session, setSession] = useState<VocabularyItem[]>([])
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [checked, setChecked] = useState(false)
  const [lastCorrect, setLastCorrect] = useState(false)
  const [attempts, setAttempts] = useState<Attempt[]>([])
  const current = session[index]

  function start(nextItems = items, nextDirection = direction) {
    if (nextItems.length === 0) return
    setDirection(nextDirection)
    setSession(pickVocabularySession(nextItems, newVocabularySeed()))
    setIndex(0)
    setAnswer('')
    setChecked(false)
    setAttempts([])
    setPhase('play')
  }

  function leaveSession() {
    if (checked || index > 0) {
      const confirmed = window.confirm('Uscire dalla sessione? I progressi di questa sessione non vengono salvati.')
      if (!confirmed) return
    }
    setPhase('start')
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    if (!current || checked || answer.trim().length === 0) return
    const correct = checkVocabularyAnswer(answer, acceptableAnswers(current, direction))
    setChecked(true)
    setLastCorrect(correct)
    setAttempts((previous) => [
      ...previous,
      { item: current, correct, given: answer.trim() },
    ])
  }

  function skip() {
    if (!current || checked) return
    setChecked(true)
    setLastCorrect(false)
    setAttempts((previous) => [
      ...previous,
      { item: current, correct: false, given: '' },
    ])
  }

  function next() {
    if (index + 1 >= session.length) {
      setPhase('done')
      return
    }
    setIndex((value) => value + 1)
    setAnswer('')
    setChecked(false)
  }

  if (!course) {
    return (
      <div className="page">
        <header className="welcome">
          <span className="eyebrow">Vocabolario</span>
          <h1>Una parola alla volta.</h1>
          <p className="lede">
            Scegli il corso da allenare: le parole arrivano dalle lezioni, senza liste da
            studiare a memoria. Puoi anche cambiare lingua più tardi.
          </p>
        </header>

        <section className="card panel">
          <h2>Scegli un corso</h2>
          <p className="muted">
            Il vocabolario è quello del corso selezionato. Le altre lingue restano fuori.
          </p>
          <div className="vocab-course-grid">
            {courses.map((option) => {
              const count = vocabularyForCourse(option).length
              return (
                <button
                  key={option.id}
                  type="button"
                  className="vocab-course-choice"
                  onClick={() => dispatch({ type: 'setActiveCourse', courseId: option.id })}
                >
                  <CourseMark course={option} />
                  <span>
                    <strong>{option.name}</strong>
                    <small>
                      {count} {count === 1 ? 'voce' : 'voci'} · {option.nativeName}
                    </small>
                  </span>
                </button>
              )
            })}
          </div>
        </section>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="page">
        <div className="card empty-state">
          <h2>Nessun vocabolo disponibile</h2>
          <p className="muted">
            Il corso di {course.name} non contiene ancora vocaboli da allenare.
          </p>
          <Link className="btn btn-primary" to="/">
            Torna ai corsi
          </Link>
        </div>
      </div>
    )
  }

  const correctCount = attempts.filter((attempt) => attempt.correct).length
  const total = attempts.length || session.length
  const percent = total > 0 ? Math.round((correctCount / total) * 100) : 0
  const wrong = attempts.filter((attempt) => !attempt.correct)
  const languageCode = course.ttsLang.split('-')[0] ?? course.id
  const directionLabel =
    direction === 'toItalian' ? `${course.nativeName} → Italiano` : `Italiano → ${course.nativeName}`

  return (
    <div className="page">
      {phase === 'start' && (
        <>
          <header className="welcome">
            <span className="eyebrow">Vocabolario · {course.name}</span>
            <h1>Una parola alla volta.</h1>
            <p className="lede">
              {items.length} voci dalle lezioni di {course.name}. Scrivi la traduzione, poi
              controlla la risposta e leggi la scheda dizionario.
            </p>
          </header>

          <section className="card vocab-start">
            <div className="vocab-start-head">
              <CourseMark course={course} />
              <div>
                <h2>Come vuoi allenarti?</h2>
                <p className="muted small">Scegli la direzione della traduzione.</p>
              </div>
              <span className="vocab-count">
                {items.length} {items.length === 1 ? 'voce' : 'voci'}
              </span>
            </div>

            <div className="direction-grid" role="radiogroup" aria-label="Direzione">
              <button
                type="button"
                role="radio"
                aria-checked={direction === 'toItalian'}
                className={`direction-choice${direction === 'toItalian' ? ' is-active' : ''}`}
                onClick={() => setDirection('toItalian')}
              >
                <span className="direction-arrow" aria-hidden="true">
                  →
                </span>
                <strong>
                  {course.nativeName} → Italiano
                </strong>
                <small>Leggi la parola e scrivi la traduzione italiana.</small>
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={direction === 'fromItalian'}
                className={`direction-choice${direction === 'fromItalian' ? ' is-active' : ''}`}
                onClick={() => setDirection('fromItalian')}
              >
                <span className="direction-arrow" aria-hidden="true">
                  →
                </span>
                <strong>Italiano → {course.nativeName}</strong>
                <small>Leggi la traduzione e scrivi la parola in {course.name.toLowerCase()}.</small>
              </button>
            </div>

            <div className="result-actions">
              <button type="button" className="btn btn-primary btn-lg" onClick={() => start()}>
                Inizia sessione
              </button>
              <Link className="btn btn-secondary" to={`/corso/${course.id}`}>
                Torna al corso
              </Link>
            </div>

            <p className="vocab-note">
              Ogni sessione propone {Math.min(VOCAB_SESSION_SIZE, items.length)} parole scelte
              a caso. Il confronto ignora gli articoli iniziali e accetta le varianti separate
              da / o da virgola.
            </p>
          </section>
        </>
      )}

      {phase === 'play' && current && (
        <div className="vocab-session">
          <div className="session-header">
            <button type="button" className="btn btn-ghost btn-small" onClick={leaveSession}>
              Esci
            </button>
            <span className="session-title">
              {course.name} · Vocabolario
            </span>
            <span className="session-count">
              {index + 1} / {session.length}
            </span>
          </div>
          <ProgressBar value={(index / session.length) * 100} />

          <section className="card vocab-card">
            <div className="vocab-card-meta">
              <span className="vocab-direction-chip">{directionLabel}</span>
              <span>
                Corrette: {correctCount} / {attempts.length}
              </span>
            </div>

            <p className="vocab-ask">
              {direction === 'toItalian'
                ? 'Come si dice in italiano?'
                : `Come si dice in ${course.name.toLowerCase()}?`}
            </p>
            <p className={`vocab-prompt${direction === 'fromItalian' ? ' is-italian' : ''}`}>
              {vocabularyPrompt(current, direction)}
            </p>

            {direction === 'toItalian' && (
              <button
                type="button"
                className="btn btn-secondary btn-small vocab-listen"
                onClick={() =>
                  speak(
                    current.term,
                    course.ttsLang,
                    state.settings.ttsRate,
                    state.settings.voices[course.id],
                  )
                }
              >
                <SpeakerIcon /> Ascolta
              </button>
            )}

            <form className="vocab-answer" onSubmit={submit}>
              <input
                key={`${index}-${direction}`}
                className={`text-input${checked ? (lastCorrect ? ' input-good' : ' input-bad') : ''}`}
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                placeholder="Scrivi la traduzione"
                autoComplete="off"
                spellCheck={false}
                disabled={checked}
                autoFocus
                aria-label="La tua risposta"
              />
              {checked ? (
                <button type="button" className="btn btn-primary" onClick={next}>
                  {index + 1 >= session.length ? 'Vedi risultato' : 'Avanti'}
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={answer.trim().length === 0}
                >
                  Verifica
                </button>
              )}
            </form>

            {!checked && (
              <button type="button" className="vocab-skip" onClick={skip}>
                Non lo so, mostrami la risposta
              </button>
            )}

            {checked && (
              <>
                <div className={`feedback ${lastCorrect ? 'feedback-good' : 'feedback-bad'}`}>
                  <div className="feedback-head">
                    {lastCorrect ? (
                      <>
                        <CheckIcon /> Corretto
                      </>
                    ) : (
                      <>
                        <span aria-hidden="true">×</span> Non ancora
                      </>
                    )}
                  </div>
                  <p className="feedback-answer">
                    Risposta: <strong>{vocabularySolution(current, direction)}</strong>
                  </p>
                  {!lastCorrect && answer.trim().length > 0 && (
                    <p className="feedback-hint">Hai scritto: «{answer.trim()}»</p>
                  )}
                </div>
                <DictionaryCard item={current} course={course} languageCode={languageCode} />
              </>
            )}
          </section>
        </div>
      )}

      {phase === 'done' && (
        <section className="card result-card vocab-result">
          <span className="eyebrow">Sessione completata</span>
          <div className={`score-big ${percent >= 70 ? 'is-good' : 'is-bad'}`}>{percent}%</div>
          <h1>
            {percent === 100
              ? 'Tutte corrette.'
              : percent >= 70
                ? 'Buon lavoro.'
                : 'Da rivedere con calma.'}
          </h1>
          <p className="muted">
            Hai risposto correttamente a {correctCount} parole su {total}.
          </p>

          {wrong.length > 0 && (
            <>
              <h2 className="section-head">Parole da rivedere</h2>
              <ul className="vocab-result-list">
                {wrong.map((attempt, position) => (
                  <li key={`${attempt.item.term}-${position}`}>
                    <strong>{attempt.item.term}</strong>
                    <span>{attempt.item.translations.join(' / ')}</span>
                    {attempt.given.length > 0 && (
                      <small>Hai scritto: «{attempt.given}»</small>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="result-actions">
            <button type="button" className="btn btn-primary" onClick={() => start()}>
              Nuova sessione
            </button>
            {wrong.length > 0 && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => start(wrong.map((attempt) => attempt.item))}
              >
                Riprova gli errori
              </button>
            )}
            <button type="button" className="btn btn-ghost" onClick={() => setPhase('start')}>
              Cambia direzione
            </button>
          </div>
        </section>
      )}
    </div>
  )
}

function DictionaryCard({
  item,
  course,
  languageCode,
}: {
  item: VocabularyItem
  course: Course
  languageCode: string
}) {
  const { state } = useApp()
  const glossary = lookupGlossary(
    item.term,
    item.translations.join(' / '),
    languageCode,
  )

  return (
    <div className="dict-card">
      <div className="dict-head">
        <div>
          <span className="eyebrow">Scheda dizionario</span>
          <h3 className="dict-term">{item.term}</h3>
          <span className="dict-pos">
            {glossary.pos} · {course.nativeName}
          </span>
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-small"
          onClick={() =>
            speak(
              item.term,
              course.ttsLang,
              state.settings.ttsRate,
              state.settings.voices[course.id],
            )
          }
        >
          <SpeakerIcon /> Ascolta
        </button>
      </div>

      {languageCode === 'es' && (
        <>
          <p className="dict-def">{glossary.definition}</p>
          <p className="dict-def-it">{glossary.definitionIt}</p>
        </>
      )}

      <dl className="dict-translations">
        <dt>Italiano</dt>
        <dd>{item.translations.join(' · ')}</dd>
      </dl>

      {item.example && (
        <div className="dict-example">
          <p>{item.example}</p>
          {item.exampleTranslation && (
            <p className="dict-example-it">{item.exampleTranslation}</p>
          )}
        </div>
      )}

      {languageCode === 'es' && glossary.source === 'generated' && (
        <p className="vocab-hint">
          Definizione essenziale generata dal vocabolario della lezione.
        </p>
      )}
    </div>
  )
}
