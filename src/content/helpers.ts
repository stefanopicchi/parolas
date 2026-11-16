import { seededShuffle } from '../lib/text'
import type {
  Exercise,
  ExerciseSpec,
  FaqItem,
  GrammarSection,
  GrammarTopic,
  Lesson,
  Unit,
  VocabItem,
} from './types'

export function mc(
  question: string,
  options: string[],
  correct: number,
  explanation?: string,
): ExerciseSpec {
  return { type: 'multiple-choice', question, options, correct, explanation }
}

export function tr(
  prompt: string,
  answers: string[],
  hint?: string,
  explanation?: string,
): ExerciseSpec {
  return { type: 'translation', prompt, answers, hint, explanation }
}

export function fb(
  sentence: string,
  answers: string[],
  translation?: string,
  explanation?: string,
): ExerciseSpec {
  return { type: 'fill-blank', sentence, answers, translation, explanation }
}

export function wo(prompt: string, answer: string[], explanation?: string): ExerciseSpec {
  return { type: 'word-order', prompt, answer, explanation }
}

export function li(
  audioText: string,
  question: string,
  options: string[],
  correct: number,
  explanation?: string,
): ExerciseSpec {
  return { type: 'listening', audioText, question, options, correct, explanation }
}

/**
 * Mescola le opzioni delle domande a scelta multipla e di ascolto.
 * Il seme è l'id dell'esercizio, così l'ordine resta stabile tra una visita e l'altra.
 */
function prepareExercise(exercise: Exercise): Exercise {
  if (exercise.type !== 'multiple-choice' && exercise.type !== 'listening') {
    return exercise
  }
  const shuffled = seededShuffle(
    exercise.options.map((option, index) => ({ option, index })),
    exercise.id,
  )
  const correct = shuffled.findIndex((entry) => entry.index === exercise.correct)
  return {
    ...exercise,
    options: shuffled.map((entry) => entry.option),
    correct: correct >= 0 ? correct : 0,
  }
}

interface LessonInput {
  id: string
  title: string
  subtitle?: string
  objectives?: string[]
  vocab: VocabItem[]
  exercises: ExerciseSpec[]
  faq?: FaqItem[]
}

export function defineLesson(input: LessonInput): Lesson {
  return {
    id: input.id,
    title: input.title,
    subtitle: input.subtitle ?? '',
    objectives: input.objectives ?? [],
    vocab: input.vocab,
    faq: input.faq ?? [],
    exercises: input.exercises.map((exercise, index) =>
      prepareExercise({
        ...exercise,
        id: `${input.id}-e${index + 1}`,
      } as Exercise),
    ),
  }
}

interface TopicInput {
  id: string
  title: string
  subtitle?: string
  intro: string
  sections: GrammarSection[]
  exercises: ExerciseSpec[]
  faq?: FaqItem[]
}

export function defineTopic(input: TopicInput): GrammarTopic {
  return {
    id: input.id,
    title: input.title,
    subtitle: input.subtitle ?? '',
    intro: input.intro,
    sections: input.sections,
    faq: input.faq ?? [],
    exercises: input.exercises.map((exercise, index) =>
      prepareExercise({
        ...exercise,
        id: `${input.id}-e${index + 1}`,
      } as Exercise),
    ),
  }
}

export function defineUnit(input: Unit): Unit {
  return input
}
