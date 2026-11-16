import { Link } from 'react-router-dom'
import type { Course } from '../content/types'
import { statsFor } from '../lib/progress'
import { useApp } from '../state/AppContext'
import { CourseMark } from './CourseMark'
import { ProgressBar } from './ProgressBar'

export function CourseCard({ course }: { course: Course }) {
  const { state } = useApp()
  const stats = statsFor(course, state.courses[course.id])
  return (
    <Link to={`/corso/${course.id}`} className="card course-card">
      <div className="course-head">
        <CourseMark course={course} />
        <div>
          <h3>{course.name}</h3>
          <span className="course-native">
            {course.nativeName} · {course.level}
          </span>
        </div>
      </div>
      <p className="course-description">{course.description}</p>
      <div className="course-progress">
        <ProgressBar value={stats.percent} />
        <span>{stats.percent}%</span>
      </div>
      <span className="course-cta">
        {stats.lessonsDone > 0 ? 'Continua il corso' : 'Inizia il corso'} →
      </span>
    </Link>
  )
}
