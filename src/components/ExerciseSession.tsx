import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import type { Course, Exercise } from '../content/types'
import type { SessionItem } from '../content'
import type { SessionResult } from '../state/AppContext'
import {
  answerTextFor,
  checkDraft,
  correctTextFor,
  initialDraft,
  instructionFor,
  isDraftReady,
  previewFor,
} from '../lib/exercises'
import type { Draft } from '../lib/exercises'
import { sameIgnoringAccents, plural } from '../lib/text'
import { ExerciseView } from './ExerciseView'
import { CourseMark } from './CourseMark'
import { ProgressBar } from './ProgressBar'
import { ArrowLeftIcon, CheckIcon, RepeatIcon } from './icons'

interface RecordedAnswer {
  key: string
  exercise: Exercise
  given: string
  expected: string
  correct: boolean
}

interface Props {
  title: string
  subtitle?: string
  items: SessionItem[]
  onExit: () => void
  onFinish?: (result: SessionResult) => void
  finishExtra?: (result: SessionResult) => ReactNode
  /** Contenuto facoltativo mostrato nel riepilogo, es. il ripasso teorico. */
  finishContent?: ReactNode
  allowRepeat?: boolean
  exitLabel?: string
  course?: Course
}

function summarize(records: RecordedAnswer[]): SessionResult {
  const correctKeys = records.filter((record) => record.correct).map((record) => record.key)
  const wrongKeys = records.filter((record) => !record.correct).map((record) => record.key)
  return { correct: correctKeys.length, total: records.length, correctKeys, wrongKeys }
}

export function ExerciseSession(props: Props) {
  const [round, setRound] = useState(0)
  return <SessionRun key={round} {...props} onRepeat={() => setRound((value) => value + 1)} />
}

function SessionRun({
  title,
  subtitle,
  items,
  onExit,
  onFinish,
  finishExtra,
  finishContent,
  allowRepeat = true,
  exitLabel = 'Torna indietro',
  onRepeat,
}: Props & { onRepeat: () => void }) {
  // La sessione lavora su una copia stabile: se il genitore aggiorna la coda
  // (es. ripasso dopo una risposta corretta), la sessione in corso non salta.
  const [sessionItems] = useState(items)
  const first = sessionItems[0]
  const [index, setIndex] = useState(0)
  const [draft, setDraft] = useState<Draft>(() =>
    first ? initialDraft(first.exercise) : { kind: 'text', value: '' },
  )
  const [submitted, setSubmitted] = useState(false)
  const [records, setRecords] = useState<RecordedAnswer[]>([])
  const [skipped, setSkipped] = useState(0)
  const [finished, setFinished] = useState(false)
  const reported = useRef(false)

  useEffect(() => {
    if (!finished || reported.current) return
    reported.current = true
    // Se l'utente ha saltato tutto, la sessione non viene registrata come completata.
    if (records.length > 0) onFinish?.(summarize(records))
  }, [finished, records, onFinish])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [index, finished])

  if (sessionItems.length === 0 || !first) {
    return (
      <div className="card empty-state">
        <h2>Nessun esercizio disponibile</h2>
        <p className="muted">Non ci sono esercizi da mostrare in questa sessione.</p>
        <button type="button" className="btn btn-primary" onClick={onExit}>
          Torna indietro
        </button>
      </div>
    )
  }

  const item = sessionItems[index] ?? first
  const exercise = item.exercise
  const ready = isDraftReady(exercise, draft)
  const currentRecord = records[records.length - 1]
  const isCorrect = currentRecord?.correct ?? false
  const accentOnly =
    Boolean(currentRecord) &&
    !isCorrect &&
    exercise.type === 'translation' &&
    sameIgnoringAccents(currentRecord!.given, currentRecord!.expected)
  const wrongCount = records.filter((record) => !record.correct).length

  function submit() {
    if (submitted || !isDraftReady(exercise, draft)) return
    const correct = checkDraft(exercise, draft)
    setRecords((previous) => [
      ...previous,
      {
        key: item.key,
        exercise,
        given: answerTextFor(exercise, draft),
        expected: correctTextFor(exercise),
        correct,
      },
    ])
    setSubmitted(true)
  }

  function advance() {
    if (index + 1 >= sessionItems.length) {
      setFinished(true)
      return
    }
    const target = sessionItems[index + 1]
    if (!target) return
    setIndex(index + 1)
    setDraft(initialDraft(target.exercise))
    setSubmitted(false)
  }

  function next() {
    if (!submitted) {
      submit()
      return
    }
    advance()
  }

  function skip() {
    if (submitted) return
    setSkipped((value) => value + 1)
    advance()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Enter' || event.nativeEvent.isComposing) return
    const target = event.target as HTMLElement
    if (target.tagName === 'BUTTON' || target.tagName === 'TEXTAREA') return
    event.preventDefault()
    next()
  }

  if (finished) {
    const summary = summarize(records)
    const answered = summary.total
    const score = answered > 0 ? Math.round((summary.correct / answered) * 100) : 0
    const mistakes = records.filter((record) => !record.correct)
    const scoreLabel =
      answered === 0
        ? 'Nessuna risposta registrata.'
        : score >= 85
          ? 'Ottimo lavoro.'
          : score >= 60
            ? 'Buon lavoro, ma c\'è da rivedere.'
            : 'Vale la pena ripassare.'
    return (
      <div className="session">
        <div className="session-header">
          <button type="button" className="btn btn-ghost btn-small" onClick={onExit}>
            <ArrowLeftIcon /> {exitLabel}
          </button>
          <span className="session-title">{title}</span>
          <span className="session-count">Fine</span>
        </div>
        <div className="card result-card">
          <span className="eyebrow">Sessione completata</span>
          <div
            className={`score-big${answered === 0 ? '' : score >= 60 ? ' is-good' : ' is-bad'}`}
          >
            {answered === 0 ? '—' : `${score}%`}
          </div>
          <h1>{scoreLabel}</h1>
          <p className="muted">
            {answered > 0
              ? `${plural(summary.correct, 'risposta corretta', 'risposte corrette')} su ${answered}`
              : 'Hai saltato tutte le domande di questa sessione.'}
            {wrongCount > 0 ? ` · ${wrongCount} da ripassare` : ''}
            {skipped > 0
              ? ` · ${plural(skipped, 'esercizio saltato', 'esercizi saltati')}`
              : ''}
          </p>
          {mistakes.length > 0 ? (
            <details className="mistakes">
              <summary>Rivedi gli errori ({mistakes.length})</summary>
              <ul>
                {mistakes.map((mistake) => (
                  <li key={mistake.key}>
                    <span className="mistake-question">{previewFor(mistake.exercise)}</span>
                    <small>
                      La tua risposta: <strong>{mistake.given}</strong>
                    </small>
                    <small>
                      Risposta corretta: <strong>{mistake.expected}</strong>
                    </small>
                  </li>
                ))}
              </ul>
            </details>
          ) : answered > 0 ? (
            <p className="feedback-inline">
              <CheckIcon /> Nessun errore. Bene così.
            </p>
          ) : null}
          {finishContent}
          <div className="result-actions">
            {allowRepeat && (
              <button type="button" className="btn btn-secondary" onClick={onRepeat}>
                <RepeatIcon /> Ripeti
              </button>
            )}
            {finishExtra?.(summary)}
            <button type="button" className="btn btn-primary" onClick={onExit}>
              {exitLabel}
            </button>
          </div>
        </div>
      </div>
    )
  }

  const percent = ((index + (submitted ? 1 : 0)) / sessionItems.length) * 100

  return (
    <div className="session">
      <div className="session-header">
        <button type="button" className="btn btn-ghost btn-small" onClick={onExit}>
          <ArrowLeftIcon /> {exitLabel}
        </button>
        <span className="session-title">{subtitle ?? title}</span>
        <span className="session-count">
          {index + 1} / {sessionItems.length}
        </span>
      </div>
      <ProgressBar value={percent} className="session-progress" />

      <div className="exercise-shell" onKeyDown={handleKeyDown}>
        <div className="card exercise-card">
          <div className="exercise-meta">
            <span>{instructionFor(exercise, item.course.name)}</span>
            <span className="exercise-lang">
              <CourseMark course={item.course} /> {item.course.nativeName}
            </span>
          </div>
          <ExerciseView
            key={item.key}
            exercise={exercise}
            course={item.course}
            draft={draft}
            onChange={setDraft}
            submitted={submitted}
            correct={isCorrect}
          />
        </div>

        {submitted && currentRecord && (
          <div
            className={`feedback ${currentRecord.correct ? 'feedback-good' : 'feedback-bad'}`}
            role="status"
          >
            <div className="feedback-head">
              <CheckIcon />
              {currentRecord.correct ? 'Corretto!' : 'Non è corretto.'}
            </div>
            {!currentRecord.correct && (
              <p className="feedback-answer">
                Risposta corretta: <strong>{currentRecord.expected}</strong>
              </p>
            )}
            {accentOnly && (
              <p className="feedback-hint">Controlla gli accenti: la risposta è quasi giusta.</p>
            )}
            {exercise.explanation && <p>{exercise.explanation}</p>}
            {exercise.type === 'listening' && (
              <p className="feedback-transcript">Trascrizione: “{exercise.audioText}”</p>
            )}
          </div>
        )}

        <div className="session-actions">
          <button
            type="button"
            className="btn btn-primary btn-wide"
            onClick={next}
            disabled={!submitted && !ready}
          >
            {submitted
              ? index + 1 >= sessionItems.length
                ? 'Vedi il risultato'
                : 'Continua'
              : 'Verifica'}
          </button>
          {exercise.type === 'listening' && !submitted && (
            <button type="button" className="btn btn-ghost" onClick={skip}>
              Salta l'ascolto
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
