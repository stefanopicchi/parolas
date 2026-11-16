import { english } from './courses/english'
import { french } from './courses/french'
import { german } from './courses/german'
import { spanish } from './courses/spanish'
import { foldForSearch } from '../lib/text'
import type { Course, Exercise, GrammarTopic, Lesson, Unit } from './types'

export const courses: Course[] = [english, spanish, french, german]
export const courseById = new Map(courses.map((course) => [course.id, course]))

export interface SessionItem {
  /** courseId:exerciseId */
  key: string
  exercise: Exercise
  course: Course
}

export interface FoundLesson {
  course: Course
  unit: Unit
  lesson: Lesson
}

export interface FoundTopic {
  course: Course
  unit: Unit
  topic: GrammarTopic
}

export function findLesson(
  courseId: string | undefined,
  lessonId: string | undefined,
): FoundLesson | null {
  if (!courseId || !lessonId) return null
  const course = courseById.get(courseId)
  if (!course) return null
  for (const unit of course.units) {
    const lesson = unit.lessons.find((item) => item.id === lessonId)
    if (lesson) return { course, unit, lesson }
  }
  return null
}

export function findTopic(
  courseId: string | undefined,
  topicId: string | undefined,
): FoundTopic | null {
  if (!courseId || !topicId) return null
  const course = courseById.get(courseId)
  if (!course) return null
  for (const unit of course.units) {
    const topic = unit.grammar.find((item) => item.id === topicId)
    if (topic) return { course, unit, topic }
  }
  return null
}

export function exerciseKey(courseId: string, exerciseId: string): string {
  return `${courseId}:${exerciseId}`
}

export function lessonItems(course: Course, lesson: Lesson): SessionItem[] {
  return lesson.exercises.map((exercise) => ({
    key: exerciseKey(course.id, exercise.id),
    exercise,
    course,
  }))
}

export function topicItems(course: Course, topic: GrammarTopic): SessionItem[] {
  return topic.exercises.map((exercise) => ({
    key: exerciseKey(course.id, exercise.id),
    exercise,
    course,
  }))
}

export interface ExerciseEntry extends SessionItem {
  courseId: string
  unit: Unit
  kind: 'lesson' | 'grammar'
  lesson?: Lesson
  topic?: GrammarTopic
}

const exerciseIndex = new Map<string, ExerciseEntry>()

for (const course of courses) {
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      for (const exercise of lesson.exercises) {
        exerciseIndex.set(exerciseKey(course.id, exercise.id), {
          key: exerciseKey(course.id, exercise.id),
          exercise,
          course,
          courseId: course.id,
          unit,
          kind: 'lesson',
          lesson,
        })
      }
    }
    for (const topic of unit.grammar) {
      for (const exercise of topic.exercises) {
        exerciseIndex.set(exerciseKey(course.id, exercise.id), {
          key: exerciseKey(course.id, exercise.id),
          exercise,
          course,
          courseId: course.id,
          unit,
          kind: 'grammar',
          topic,
        })
      }
    }
  }
}

export function findExerciseEntry(key: string): ExerciseEntry | null {
  return exerciseIndex.get(key) ?? null
}

export const totalExercises = exerciseIndex.size

export interface VocabularyItem {
  term: string
  /** Tutte le traduzioni italiane trovate nel corso. */
  translations: string[]
  example?: string
  exampleTranslation?: string
}

const vocabularyIndex = new Map<string, VocabularyItem[]>()

/** Vocabolario unico del corso, ricavato dalle lezioni e senza duplicati. */
export function vocabularyForCourse(course: Course): VocabularyItem[] {
  const cached = vocabularyIndex.get(course.id)
  if (cached) return cached

  const byTerm = new Map<string, VocabularyItem>()
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      for (const item of lesson.vocab) {
        const key = foldForSearch(item.term)
        const existing = byTerm.get(key)
        if (!existing) {
          byTerm.set(key, {
            term: item.term,
            translations: [item.translation],
            example: item.example,
            exampleTranslation: item.exampleTranslation,
          })
          continue
        }
        if (!existing.translations.includes(item.translation)) {
          existing.translations.push(item.translation)
        }
        if (!existing.example && item.example) existing.example = item.example
        if (!existing.exampleTranslation && item.exampleTranslation) {
          existing.exampleTranslation = item.exampleTranslation
        }
      }
    }
  }

  const list = Array.from(byTerm.values())
  vocabularyIndex.set(course.id, list)
  return list
}
