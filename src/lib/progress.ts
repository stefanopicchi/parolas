import type { Course } from '../content/types'
import type { CourseProgress } from './storage'

export interface CourseStats {
  lessonsDone: number
  lessonsTotal: number
  topicsDone: number
  topicsTotal: number
  percent: number
}

export function statsFor(course: Course, progress?: CourseProgress): CourseStats {
  const lessons = course.units.flatMap((unit) => unit.lessons)
  const topics = course.units.flatMap((unit) => unit.grammar)
  const lessonsDone = lessons.filter((lesson) => progress?.lessons[lesson.id]?.completed).length
  const topicsDone = topics.filter((topic) => progress?.grammar[topic.id]?.completed).length
  const total = lessons.length + topics.length
  const done = lessonsDone + topicsDone
  return {
    lessonsDone,
    lessonsTotal: lessons.length,
    topicsDone,
    topicsTotal: topics.length,
    percent: total === 0 ? 0 : Math.round((done / total) * 100),
  }
}

export function nextLessonFor(course: Course, progress?: CourseProgress) {
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      if (!progress?.lessons[lesson.id]?.completed) {
        return { unit, lesson }
      }
    }
  }
  return null
}

export function reviewCountFor(review: ReadonlyArray<{ courseId: string }>, courseId: string): number {
  return review.filter((item) => item.courseId === courseId).length
}
