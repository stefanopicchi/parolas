import type { Course } from '../content/types'

export function CourseMark({
  course,
  size = 'normal',
}: {
  course: Course
  size?: 'normal' | 'large'
}) {
  return (
    <span
      className={`course-mark${size === 'large' ? ' is-large' : ''}`}
      aria-hidden="true"
    >
      {course.id.toUpperCase()}
    </span>
  )
}
