import type { Exercise } from '../content/types'
import { normalizeAnswer } from './text'

export type Draft =
  | { kind: 'text'; value: string }
  | { kind: 'choice'; index: number | null }
  | { kind: 'order'; words: string[] }

export function initialDraft(exercise: Exercise): Draft {
  switch (exercise.type) {
    case 'multiple-choice':
    case 'listening':
      return { kind: 'choice', index: null }
    case 'word-order':
      return { kind: 'order', words: [] }
    default:
      return { kind: 'text', value: '' }
  }
}

export function isDraftReady(exercise: Exercise, draft: Draft): boolean {
  switch (exercise.type) {
    case 'multiple-choice':
    case 'listening':
      return draft.kind === 'choice' && draft.index !== null
    case 'word-order':
      return draft.kind === 'order' && draft.words.length === exercise.answer.length
    default:
      return draft.kind === 'text' && draft.value.trim().length > 0
  }
}

export function checkDraft(exercise: Exercise, draft: Draft): boolean {
  switch (exercise.type) {
    case 'multiple-choice':
    case 'listening':
      return draft.kind === 'choice' && draft.index === exercise.correct
    case 'word-order': {
      if (draft.kind !== 'order') return false
      return (
        normalizeAnswer(draft.words.join(' ')) === normalizeAnswer(exercise.answer.join(' '))
      )
    }
    case 'translation': {
      if (draft.kind !== 'text') return false
      const given = normalizeAnswer(draft.value)
      return exercise.answers.some((answer) => normalizeAnswer(answer) === given)
    }
    case 'fill-blank': {
      if (draft.kind !== 'text') return false
      const given = normalizeAnswer(draft.value)
      return exercise.answers.some((answer) => normalizeAnswer(answer) === given)
    }
  }
}

export function correctTextFor(exercise: Exercise): string {
  switch (exercise.type) {
    case 'multiple-choice':
    case 'listening':
      return exercise.options[exercise.correct] ?? ''
    case 'translation':
      return exercise.answers[0] ?? ''
    case 'fill-blank':
      return exercise.sentence.replace('___', exercise.answers[0] ?? '')
    case 'word-order':
      return exercise.answer.join(' ')
  }
}

export function answerTextFor(exercise: Exercise, draft: Draft): string {
  switch (exercise.type) {
    case 'multiple-choice':
    case 'listening':
      return draft.kind === 'choice' && draft.index !== null
        ? (exercise.options[draft.index] ?? '—')
        : '—'
    case 'word-order':
      return draft.kind === 'order' ? draft.words.join(' ') : '—'
    default:
      return draft.kind === 'text' && draft.value.trim() ? draft.value : '—'
  }
}

export function instructionFor(exercise: Exercise, languageName: string): string {
  switch (exercise.type) {
    case 'multiple-choice':
      return 'Scegli la risposta corretta'
    case 'translation':
      return `Traduci in ${languageName}`
    case 'fill-blank':
      return 'Completa la frase'
    case 'word-order':
      return 'Riordina le parole'
    case 'listening':
      return 'Ascolta e rispondi'
  }
}

export function previewFor(exercise: Exercise): string {
  switch (exercise.type) {
    case 'multiple-choice':
    case 'listening':
      return exercise.question
    case 'translation':
      return exercise.prompt
    case 'fill-blank':
      return exercise.sentence.replace('___', '…')
    case 'word-order':
      return exercise.prompt
  }
}
