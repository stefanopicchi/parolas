import { useMemo, useRef } from 'react'
import type { Course, Exercise } from '../content/types'
import type { Draft } from '../lib/exercises'
import { seededShuffle } from '../lib/text'
import { useSpeak } from '../lib/useSpeech'
import { SpeakerIcon } from './icons'

/** Tasti rapidi per i caratteri che non sono sulla tastiera italiana. */
const accentKeys: Record<string, string[]> = {
  es: ['á', 'é', 'í', 'ó', 'ú', 'ü', 'ñ', '¿', '¡'],
  fr: ['à', 'â', 'ä', 'ç', 'é', 'è', 'ê', 'ë', 'î', 'ï', 'ô', 'ö', 'ù', 'û', 'ü', 'ÿ', 'œ', 'æ'],
  de: ['ä', 'ö', 'ü', 'ß'],
}

interface Props {
  exercise: Exercise
  course: Course
  draft: Draft
  onChange: (draft: Draft) => void
  submitted: boolean
  correct: boolean
}

export function ExerciseView({ exercise, course, draft, onChange, submitted, correct }: Props) {
  const speak = useSpeak()
  const inputRef = useRef<HTMLInputElement>(null)
  const specialKeys = accentKeys[course.id] ?? []

  const insertCharacter = (character: string) => {
    const input = inputRef.current
    if (!input || submitted) return
    const start = input.selectionStart ?? input.value.length
    const end = input.selectionEnd ?? start
    const value = `${input.value.slice(0, start)}${character}${input.value.slice(end)}`
    onChange({ kind: 'text', value })
    requestAnimationFrame(() => {
      input.focus()
      const cursor = start + character.length
      input.setSelectionRange(cursor, cursor)
    })
  }

  const accentBar = specialKeys.length > 0 && !submitted && (
    <div className="accent-keys" aria-label={`Caratteri speciali per ${course.name}`}>
      {specialKeys.map((character) => (
        <button
          key={character}
          type="button"
          className="accent-key"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => insertCharacter(character)}
          aria-label={`Inserisci ${character}`}
          title={`Inserisci ${character}`}
        >
          {character}
        </button>
      ))}
    </div>
  )

  const orderWords = useMemo(() => {
    if (exercise.type !== 'word-order') return []
    const base = exercise.words ?? exercise.answer
    const shuffled = seededShuffle(base, exercise.id)
    if (shuffled.length > 1 && shuffled.every((word, index) => word === base[index])) {
      return [...shuffled.slice(1), shuffled[0]!]
    }
    return shuffled
  }, [exercise])

  const options = (items: string[], selected: number | null, answer: number, choose: (i: number) => void) => (
    <div className="options">
      {items.map((option, index) => {
        const isChosen = selected === index
        const isCorrect = submitted && index === answer
        const isWrong = submitted && isChosen && index !== answer
        return (
          <button
            key={`${option}-${index}`}
            type="button"
            className={`option${isChosen ? ' is-selected' : ''}${isCorrect ? ' is-correct' : ''}${isWrong ? ' is-wrong' : ''}`}
            onClick={() => choose(index)}
            disabled={submitted}
            aria-pressed={isChosen}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
            <span>{option}</span>
          </button>
        )
      })}
    </div>
  )

  if (exercise.type === 'multiple-choice') {
    return (
      <div className="exercise-body">
        <p className="question">{exercise.question}</p>
        {options(
          exercise.options,
          draft.kind === 'choice' ? draft.index : null,
          exercise.correct,
          (index) => onChange({ kind: 'choice', index }),
        )}
      </div>
    )
  }

  if (exercise.type === 'listening') {
    return (
      <div className="exercise-body">
        <div className="listen-row">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => speak(exercise.audioText, course.ttsLang, course.id)}
          >
            <SpeakerIcon /> Ascolta
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-small"
            onClick={() => speak(exercise.audioText, course.ttsLang, course.id, true)}
          >
            Più lento
          </button>
        </div>
        <p className="question">{exercise.question}</p>
        {options(
          exercise.options,
          draft.kind === 'choice' ? draft.index : null,
          exercise.correct,
          (index) => onChange({ kind: 'choice', index }),
        )}
      </div>
    )
  }

  if (exercise.type === 'translation') {
    return (
      <div className="exercise-body">
        <p className="translation-prompt">{exercise.prompt}</p>
        {exercise.hint && <p className="hint">Suggerimento: {exercise.hint}</p>}
        <input
          ref={inputRef}
          className={`text-input${submitted ? (correct ? ' input-good' : ' input-bad') : ''}`}
          value={draft.kind === 'text' ? draft.value : ''}
          onChange={(event) => onChange({ kind: 'text', value: event.target.value })}
          placeholder={`Scrivi in ${course.name}…`}
          disabled={submitted}
          autoFocus
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
        />
        {accentBar}
      </div>
    )
  }

  if (exercise.type === 'fill-blank') {
    const [before, after = ''] = exercise.sentence.split('___')
    return (
      <div className="exercise-body">
        <p className="fill-sentence">
          {before}
          <input
            ref={inputRef}
            className={`fill-input${submitted ? (correct ? ' input-good' : ' input-bad') : ''}`}
            value={draft.kind === 'text' ? draft.value : ''}
            onChange={(event) => onChange({ kind: 'text', value: event.target.value })}
            disabled={submitted}
            autoFocus
            autoComplete="off"
            spellCheck={false}
            style={{
              width: `${Math.max(6, Math.min(24, (exercise.answers[0]?.length ?? 6) + 2))}ch`,
            }}
            aria-label="Parola mancante"
          />
          {after}
        </p>
        {accentBar}
        {exercise.translation && <p className="hint">{exercise.translation}</p>}
      </div>
    )
  }

  const words = orderWords
  const selected = draft.kind === 'order' ? draft.words : []
  const remaining = [...words]
  for (const word of selected) {
    const index = remaining.indexOf(word)
    if (index >= 0) remaining.splice(index, 1)
  }

  const removeAt = (index: number) => {
    if (submitted) return
    onChange({ kind: 'order', words: selected.filter((_, i) => i !== index) })
  }

  const addWord = (word: string) => {
    if (submitted) return
    onChange({ kind: 'order', words: [...selected, word] })
  }

  return (
    <div className="exercise-body">
      <p className="translation-prompt">{exercise.prompt}</p>
      <div
        className={`order-answer${submitted ? (correct ? ' answer-good' : ' answer-bad') : ''}`}
      >
        {selected.length === 0 ? (
          <span className="order-placeholder">Tocca le parole qui sotto nell'ordine giusto</span>
        ) : (
          selected.map((word, index) => (
            <button
              key={`${word}-${index}`}
              type="button"
              className="token token-selected"
              onClick={() => removeAt(index)}
              disabled={submitted}
            >
              {word}
            </button>
          ))
        )}
      </div>
      <div className="token-bank">
        {remaining.map((word, index) => (
          <button
            key={`${word}-${index}`}
            type="button"
            className="token"
            onClick={() => addWord(word)}
            disabled={submitted}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  )
}
