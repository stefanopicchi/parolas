import { useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { CourseMark } from '../components/CourseMark'
import { GrammarSections } from '../components/GrammarSections'
import { ProgressBar } from '../components/ProgressBar'
import { courseById } from '../content'
import { reviewCountFor, statsFor } from '../lib/progress'
import { useApp } from '../state/AppContext'
import { NotFoundPage } from './NotFoundPage'

export function CoursePage() {
  const { courseId } = useParams()
  const { state, dispatch } = useApp()
  const navigate = useNavigate()
  const { hash } = useLocation()
  const course = courseId ? courseById.get(courseId) : undefined
  const activeMismatch = Boolean(
    state.activeCourseId && course && state.activeCourseId !== course.id,
  )

  useEffect(() => {
    if (course && !activeMismatch) dispatch({ type: 'setActiveCourse', courseId: course.id })
  }, [course, activeMismatch, dispatch])

  useEffect(() => {
    if (!hash) return
    const element = document.getElementById(hash.slice(1))
    if (element) element.scrollIntoView({ block: 'start' })
  }, [hash, courseId])

  if (!course) return <NotFoundPage />
  if (activeMismatch) return <Navigate to="/" replace />

  function changeLanguage() {
    dispatch({ type: 'setActiveCourse', courseId: null })
    navigate('/')
  }

  const progress = state.courses[course.id]
  const stats = statsFor(course, progress)
  const reviewCount = reviewCountFor(state.review, course.id)

  return (
    <div className="page">
      <div className="breadcrumb breadcrumb-split">
        <Link to="/">← Home</Link>
        <button type="button" className="btn btn-ghost btn-small" onClick={changeLanguage}>
          Cambia lingua
        </button>
      </div>

      <header className="course-hero">
        <CourseMark course={course} size="large" />
        <div>
          <span className="eyebrow">
            Corso · {course.level} · {course.nativeName}
          </span>
          <h1>{course.name}</h1>
          <p className="lede">{course.description}</p>
        </div>
      </header>

      <section className="card course-summary">
        <div className="summary-stats">
          <div>
            <strong>{stats.percent}%</strong>
            <span>completato</span>
          </div>
          <div>
            <strong>
              {stats.lessonsDone}/{stats.lessonsTotal}
            </strong>
            <span>lezioni</span>
          </div>
          <div>
            <strong>
              {stats.topicsDone}/{stats.topicsTotal}
            </strong>
            <span>grammatica</span>
          </div>
          <div>
            <strong>{reviewCount}</strong>
            <span>da ripassare</span>
          </div>
        </div>
        <ProgressBar value={stats.percent} />
        {reviewCount > 0 && (
          <div className="summary-links">
            <Link to="/ripasso">Ripassa gli errori di questo corso →</Link>
          </div>
        )}
      </section>

      {course.units.map((unit, unitIndex) => (
        <section className="unit" key={unit.id} id={unit.id}>
          <header className="unit-head">
            <span className="unit-index">Unità {unitIndex + 1}</span>
            <h2>{unit.title}</h2>
            <p>{unit.subtitle}</p>
          </header>
          {unit.intro && (
            <div className="card unit-intro">
              <span className="eyebrow">Prima di iniziare</span>
              <p>{unit.intro}</p>
              {unit.keyPoints && unit.keyPoints.length > 0 && (
                <ul className="unit-keypoints">
                  {unit.keyPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {unit.theory && unit.theory.length > 0 && (
            <details className="card unit-theory" open>
              <summary>
                <span className="unit-theory-label">Teoria dell'unità</span>
                <span className="unit-theory-title">Regole, esempi e tabelle</span>
                <span className="unit-theory-meta">
                  {unit.theory.length} {unit.theory.length === 1 ? 'sezione' : 'sezioni'}
                </span>
              </summary>
              <div className="unit-theory-body">
                <GrammarSections sections={unit.theory} idPrefix={unit.id} />
              </div>
            </details>
          )}
          <div className="row-list card">
            {unit.lessons.map((lesson, lessonIndex) => {
              const record = progress?.lessons[lesson.id]
              return (
                <Link
                  className="row"
                  to={`/lezione/${course.id}/${lesson.id}`}
                  key={lesson.id}
                >
                  <span className="row-icon" aria-hidden="true">
                    {lessonIndex + 1}
                  </span>
                  <span className="row-main">
                    <strong>{lesson.title}</strong>
                    <small>
                      {lesson.subtitle} · {lesson.exercises.length} esercizi
                    </small>
                  </span>
                  <span className={`badge${record?.completed ? ' badge-good' : ''}`}>
                    {record?.completed ? `Completata · ${record.bestScore}%` : 'Lezione'}
                  </span>
                </Link>
              )
            })}
            {unit.grammar.map((topic) => {
              const record = progress?.grammar[topic.id]
              return (
                <Link
                  className="row row-grammar"
                  to={`/grammatica/${course.id}/${topic.id}`}
                  key={topic.id}
                >
                  <span className="row-icon" aria-hidden="true">
                    G
                  </span>
                  <span className="row-main">
                    <strong>{topic.title}</strong>
                    <small>
                      Grammatica · {topic.subtitle} · {topic.exercises.length} esercizi
                    </small>
                  </span>
                  <span className={`badge${record?.completed ? ' badge-good' : ' badge-soft'}`}>
                    {record?.completed ? `Ripassata · ${record.bestScore}%` : 'Spiegazione'}
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
