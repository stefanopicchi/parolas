import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AIAssistant } from '../components/AIAssistant'
import { Accordion } from '../components/Accordion'
import { ExerciseSession } from '../components/ExerciseSession'
import { GrammarSections } from '../components/GrammarSections'
import { findTopic, topicItems } from '../content'
import { useApp } from '../state/AppContext'
import { NotFoundPage } from './NotFoundPage'

export function GrammarPage() {
  const { courseId, topicId } = useParams()
  const { state, dispatch } = useApp()
  const [mode, setMode] = useState<'read' | 'practice'>('read')
  const found = findTopic(courseId, topicId)
  const foundCourseId = found?.course.id
  const activeMismatch = Boolean(
    state.activeCourseId && foundCourseId && state.activeCourseId !== foundCourseId,
  )

  useEffect(() => {
    setMode('read')
  }, [topicId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [mode, topicId])

  useEffect(() => {
    if (foundCourseId && !activeMismatch) {
      dispatch({ type: 'setActiveCourse', courseId: foundCourseId })
    }
  }, [foundCourseId, activeMismatch, dispatch])

  if (!found) return <NotFoundPage />
  if (activeMismatch) return <Navigate to="/" replace />

  const { course, unit, topic } = found
  const record = state.courses[course.id]?.grammar[topic.id]
  const items = topicItems(course, topic)

  if (mode === 'practice') {
    return (
      <div className="page">
        <ExerciseSession
          title={topic.title}
          subtitle={`Grammatica · ${course.name}`}
          items={items}
          onExit={() => setMode('read')}
          exitLabel="Torna alla spiegazione"
          onFinish={(result) =>
            dispatch({
              type: 'recordSession',
              courseId: course.id,
              kind: 'grammar',
              id: topic.id,
              result,
            })
          }
          finishExtra={(result) => (
            <>
              {result.wrongKeys.length > 0 && (
                <Link className="btn btn-secondary" to="/ripasso">
                  Ripassa gli errori
                </Link>
              )}
            </>
          )}
        />
      </div>
    )
  }

  const aiContext = [
    `Corso: ${course.name} (${course.nativeName}), livello ${course.level}. Lo studente parla italiano.`,
    `Scheda di grammatica: ${topic.title} — ${topic.subtitle}.`,
    topic.intro,
    ...topic.sections.flatMap((section) => [
      section.heading ?? '',
      ...(section.paragraphs ?? []),
      ...(section.bullets ?? []),
      ...(section.table
        ? section.table.rows.map((row) => row.join(' | '))
        : []),
      ...(section.examples?.map((example) => `${example.target} = ${example.italian}`) ?? []),
    ]),
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <div className="page">
      <div className="breadcrumb">
        <Link to={`/corso/${course.id}`}>← {course.name}</Link>
      </div>

      <header className="lesson-head">
        <span className="eyebrow">
          {unit.title} · Grammatica
        </span>
        <h1>{topic.title}</h1>
        <p className="lede">{topic.subtitle}</p>
        <div className="meta-chips">
          <span className="chip">Spiegazione + {topic.exercises.length} esercizi</span>
          {record && (
            <span className="chip chip-good">Miglior risultato: {record.bestScore}%</span>
          )}
        </div>
        <div className="lesson-actions">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => setMode('practice')}
          >
            {record ? 'Ripeti gli esercizi' : 'Fai gli esercizi'}
          </button>
          <span className="muted small">Leggi prima la spiegazione, poi mettila in pratica.</span>
        </div>
      </header>

      <article className="card grammar-article">
        <p className="grammar-intro">{topic.intro}</p>
        <GrammarSections sections={topic.sections} idPrefix={topic.id} />
      </article>

      <section className="section">
        <div className="section-head">
          <h2>Domande frequenti</h2>
          <p className="muted">I dubbi più comuni su questo argomento.</p>
        </div>
        <Accordion items={topic.faq} />
      </section>

      <AIAssistant context={aiContext} />

      <div className="bottom-cta">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => setMode('practice')}
        >
          {record ? 'Ripeti gli esercizi' : `Fai i ${topic.exercises.length} esercizi`}
        </button>
        <Link className="btn btn-ghost" to={`/corso/${course.id}`}>
          Torna al corso
        </Link>
      </div>
    </div>
  )
}
