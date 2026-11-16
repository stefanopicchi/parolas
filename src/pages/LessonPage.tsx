import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { AIAssistant } from '../components/AIAssistant'
import { Accordion } from '../components/Accordion'
import { ExerciseSession } from '../components/ExerciseSession'
import { lessonItems } from '../content'
import { findLesson } from '../content'
import { useApp } from '../state/AppContext'
import { NotFoundPage } from './NotFoundPage'

export function LessonPage() {
  const { courseId, lessonId } = useParams()
  const { state, dispatch } = useApp()
  const navigate = useNavigate()
  const [mode, setMode] = useState<'intro' | 'session'>('intro')
  const found = findLesson(courseId, lessonId)
  const foundCourseId = found?.course.id
  const activeMismatch = Boolean(
    state.activeCourseId && foundCourseId && state.activeCourseId !== foundCourseId,
  )

  useEffect(() => {
    setMode('intro')
  }, [lessonId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [mode, lessonId])

  useEffect(() => {
    if (foundCourseId && !activeMismatch) {
      dispatch({ type: 'setActiveCourse', courseId: foundCourseId })
    }
  }, [foundCourseId, activeMismatch, dispatch])

  if (!found) return <NotFoundPage />
  if (activeMismatch) return <Navigate to="/" replace />

  const { course, unit, lesson } = found
  const record = state.courses[course.id]?.lessons[lesson.id]
  const items = lessonItems(course, lesson)

  if (mode === 'session') {
    return (
      <div className="page">
        <ExerciseSession
          title={lesson.title}
          subtitle={`${course.name} · ${unit.title}`}
          items={items}
          onExit={() => navigate(`/corso/${course.id}`)}
          exitLabel="Torna al corso"
          onFinish={(result) =>
            dispatch({
              type: 'recordSession',
              courseId: course.id,
              kind: 'lesson',
              id: lesson.id,
              result,
            })
          }
          finishContent={
            <details className="lesson-recap">
              <summary>Ripasso teorico (facoltativo)</summary>
              <div className="lesson-recap-body">
                {unit.intro && <p className="recap-note">{unit.intro}</p>}
                {unit.theory && (
                  <p className="recap-note">
                    <Link to={`/corso/${course.id}#${unit.id}`}>Rivedi la teoria dell'unità →</Link>
                  </p>
                )}
                <h3>Cosa hai visto</h3>
                <ul className="objectives">
                  {lesson.objectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
                <h3>Parole chiave</h3>
                <ul className="recap-vocab">
                  {lesson.vocab.map((item) => (
                    <li key={item.term}>
                      <strong>{item.term}</strong>
                      <span>{item.translation}</span>
                      {item.example && <small>{item.example}</small>}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          }
          finishExtra={(result) => (
            <>
              {result.wrongKeys.length > 0 && (
                <Link className="btn btn-secondary" to="/ripasso">
                  Ripassa gli errori
                </Link>
              )}
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setMode('intro')}
              >
                Rivedi la teoria
              </button>
            </>
          )}
        />
      </div>
    )
  }

  const aiContext = [
    `Corso: ${course.name} (${course.nativeName}), livello ${course.level}. Lo studente parla italiano.`,
    `Lezione: ${lesson.title} — ${lesson.subtitle}.`,
    `Obiettivi: ${lesson.objectives.join('; ')}.`,
    `Vocabolario: ${lesson.vocab.map((item) => `${item.term} = ${item.translation}`).join('; ')}.`,
  ].join('\n')

  return (
    <div className="page">
      <div className="breadcrumb">
        <Link to={`/corso/${course.id}`}>← {course.name}</Link>
      </div>

      <header className="lesson-head">
        <span className="eyebrow">
          {unit.title} · Lezione
        </span>
        <h1>{lesson.title}</h1>
        <p className="lede">{lesson.subtitle}</p>
        <div className="meta-chips">
          <span className="chip">{lesson.exercises.length} esercizi</span>
          <span className="chip">{lesson.vocab.length} parole nuove</span>
          {record && <span className="chip chip-good">Miglior risultato: {record.bestScore}%</span>}
        </div>
        <div className="lesson-actions">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => setMode('session')}
          >
            {record ? 'Ripeti la lezione' : 'Inizia la lezione'}
          </button>
          <span className="muted small">
            {record
              ? `Fatta ${record.attempts} ${record.attempts === 1 ? 'volta' : 'volte'}`
              : lesson.exercises.length >= 10
                ? 'Circa 10–15 minuti'
                : 'Circa 5 minuti'}
          </span>
        </div>
      </header>

      <section className="card panel">
        <h2>Cosa imparerai</h2>
        <ul className="objectives">
          {lesson.objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Parole nuove</h2>
          <p className="muted">Rileggile prima di iniziare: torneranno negli esercizi.</p>
        </div>
        <div className="card table-wrap">
          <table className="vocab-table">
            <thead>
              <tr>
                <th>{course.nativeName}</th>
                <th>Italiano</th>
              </tr>
            </thead>
            <tbody>
              {lesson.vocab.map((item) => (
                <tr key={item.term}>
                  <td>
                    <strong>{item.term}</strong>
                    {item.example && (
                      <small className="vocab-example">
                        {item.example}
                        {item.exampleTranslation ? ` — ${item.exampleTranslation}` : ''}
                      </small>
                    )}
                  </td>
                  <td>{item.translation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Domande frequenti</h2>
          <p className="muted">Risposte pronte, disponibili anche offline.</p>
        </div>
        <Accordion items={lesson.faq} />
      </section>

      <AIAssistant context={aiContext} />

      <div className="bottom-cta">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => setMode('session')}
        >
          {record ? 'Ripeti la lezione' : 'Inizia la lezione'}
        </button>
        <Link className="btn btn-ghost" to={`/corso/${course.id}`}>
          Torna al corso
        </Link>
      </div>
    </div>
  )
}
