import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExerciseSession } from '../components/ExerciseSession'
import { CourseMark } from '../components/CourseMark'
import { courseById, findExerciseEntry } from '../content'
import type { ExerciseEntry } from '../content'
import type { ReviewItem } from '../lib/storage'
import { useApp } from '../state/AppContext'

interface ResolvedReview {
  item: ReviewItem
  entry: ExerciseEntry
}

export function ReviewPage() {
  const { state, dispatch } = useApp()
  const [scope, setScope] = useState<string | 'all' | null>(null)
  const activeCourseId = state.activeCourseId
  const activeCourse = activeCourseId ? courseById.get(activeCourseId) : undefined

  const resolved: ResolvedReview[] = []
  for (const item of state.review) {
    if (activeCourseId && item.courseId !== activeCourseId) continue
    const entry = findExerciseEntry(item.key)
    if (entry) resolved.push({ item, entry })
  }

  const groups = Array.from(
    resolved.reduce((map, current) => {
      const list = map.get(current.entry.courseId) ?? []
      list.push(current)
      map.set(current.entry.courseId, list)
      return map
    }, new Map<string, ResolvedReview[]>()),
  ).map(([courseId, entries]) => ({ courseId, entries }))

  if (scope !== null) {
    const entries = resolved.filter(
      (current) => scope === 'all' || current.entry.courseId === scope,
    )
    const items = entries.map((current) => ({
      key: current.item.key,
      exercise: current.entry.exercise,
      course: current.entry.course,
    }))
    const label =
      scope === 'all'
        ? 'Tutti i corsi'
        : (entries[0]?.entry.course.name ?? 'Ripasso')

    return (
      <div className="page">
        <ExerciseSession
          title="Ripasso degli errori"
          subtitle={label}
          items={items}
          onExit={() => setScope(null)}
          exitLabel="Torna al ripasso"
          allowRepeat={false}
          onFinish={(result) => dispatch({ type: 'reviewResult', result })}
        />
      </div>
    )
  }

  return (
    <div className="page">
      <header className="welcome">
        <span className="eyebrow">
          {activeCourse ? `Ripasso · ${activeCourse.name}` : 'Ripasso'}
        </span>
        <h1>Gli errori che tornano utili.</h1>
        <p className="lede">
          {activeCourse
            ? `Qui trovi solo gli esercizi di ${activeCourse.name}. Quando li azzecchi, escono dalla coda.`
            : 'Gli esercizi sbagliati restano qui. Quando li azzecchi al ripasso, escono dalla coda. Niente punteggi da difendere, solo cose da rivedere.'}
        </p>
      </header>

      {resolved.length === 0 ? (
        <div className="card empty-state">
          <span className="empty-mark" aria-hidden="true">
            ✓
          </span>
          <h2>Nessun errore da ripassare</h2>
          <p className="muted">
            {activeCourse
              ? `La coda di ${activeCourse.name} è vuota. Quando sbaglierai un esercizio, comparirà qui.`
              : 'La coda è vuota. Quando sbaglierai un esercizio in una lezione o in grammatica, comparirà qui.'}
          </p>
          <Link className="btn btn-primary" to="/">
            {activeCourse ? 'Torna al corso' : 'Vai ai corsi'}
          </Link>
        </div>
      ) : (
        <>
          <section className="card continue-card">
            <div className="continue-head">
              <div>
                <span className="eyebrow">Coda di ripasso</span>
                <h2>
                  {resolved.length}{' '}
                  {resolved.length === 1 ? 'esercizio da rivedere' : 'esercizi da rivedere'}
                </h2>
              </div>
            </div>
            <p className="muted">
              {activeCourse
                ? `Puoi ripassare tutti gli errori di ${activeCourse.name} in una sessione.`
                : 'Puoi ripassare tutto insieme oppure concentrarti su un corso.'}
            </p>
            <div className="result-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setScope('all')}
              >
                {activeCourse ? `Ripassa ${activeCourse.name}` : 'Ripassa tutto'}
              </button>
            </div>
          </section>

          {groups.length > 1 && (
            <section className="section">
              <div className="section-head">
                <h2>Per corso</h2>
              </div>
              <div className="review-groups">
                {groups.map((group) => {
                  const course = group.entries[0]?.entry.course
                  if (!course) return null
                  return (
                    <div className="card review-group" key={group.courseId}>
                      <div className="review-group-head">
                        <CourseMark course={course} />
                        <div>
                          <strong>{course.name}</strong>
                          <small className="muted">
                            {group.entries.length}{' '}
                            {group.entries.length === 1 ? 'esercizio' : 'esercizi'}
                          </small>
                        </div>
                        <button
                          type="button"
                          className="btn btn-secondary btn-small"
                          onClick={() => setScope(group.courseId)}
                        >
                          Ripassa
                        </button>
                      </div>
                      <details className="review-list">
                        <summary>Vedi gli esercizi</summary>
                        <ul>
                          {group.entries.map(({ item, entry }) => (
                            <li key={item.key}>
                              <span>{previewText(entry)}</span>
                              <small className="muted">
                                {item.misses > 1 ? `Sbagliato ${item.misses} volte` : 'Da rivedere'}
                              </small>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          <div className="page-actions">
            <button
              type="button"
              className="btn btn-ghost btn-small"
              onClick={() => {
                const message = activeCourse
                  ? `Svuotare la coda di ripasso di ${activeCourse.name}?`
                  : 'Svuotare tutta la coda di ripasso?'
                if (window.confirm(message)) {
                  dispatch({ type: 'clearReview', courseId: activeCourseId ?? undefined })
                }
              }}
            >
              {activeCourse ? `Svuota il ripasso di ${activeCourse.name}` : 'Svuota il ripasso'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

function previewText(entry: ExerciseEntry): string {
  const exercise = entry.exercise
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
