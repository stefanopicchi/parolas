import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CourseMark } from '../components/CourseMark'
import { courses } from '../content'
import type { Course, GrammarSection, GrammarTopic, Unit } from '../content/types'
import { foldForSearch } from '../lib/text'
import { useApp } from '../state/AppContext'

interface BaseEntry {
  course: Course
  unit: Unit
  searchable: string
}

interface TopicEntry extends BaseEntry {
  kind: 'topic'
  topic: GrammarTopic
}

interface UnitEntry extends BaseEntry {
  kind: 'unit'
}

type TheoryEntry = TopicEntry | UnitEntry

function sectionText(sections: GrammarSection[]): string[] {
  const parts: string[] = []
  for (const section of sections) {
    if (section.heading) parts.push(section.heading)
    if (section.paragraphs) parts.push(...section.paragraphs)
    if (section.bullets) parts.push(...section.bullets)
    if (section.table) {
      parts.push(...section.table.headers, ...section.table.rows.flat())
    }
    if (section.examples) {
      for (const example of section.examples) {
        parts.push(example.target, example.italian)
      }
    }
  }
  return parts
}

function unitSearchText(course: Course, unit: Unit): string {
  return foldForSearch(
    [
      course.name,
      course.nativeName,
      'teoria dell\'unità',
      unit.title,
      unit.subtitle,
      unit.intro ?? '',
      ...(unit.keyPoints ?? []),
      ...sectionText(unit.theory ?? []),
    ].join(' '),
  )
}

function topicSearchText(course: Course, unit: Unit, topic: GrammarTopic): string {
  return foldForSearch(
    [
      course.name,
      course.nativeName,
      unit.title,
      topic.title,
      topic.subtitle,
      topic.intro,
      ...sectionText(topic.sections),
    ].join(' '),
  )
}

const entries: TheoryEntry[] = courses.flatMap((course) =>
  course.units.flatMap((unit) => {
    const topicEntries: TheoryEntry[] = unit.grammar.map((topic) => ({
      kind: 'topic',
      course,
      unit,
      topic,
      searchable: topicSearchText(course, unit, topic),
    }))
    const unitEntry: TheoryEntry[] = unit.theory?.length
      ? [
          {
            kind: 'unit',
            course,
            unit,
            searchable: unitSearchText(course, unit),
          },
        ]
      : []
    return [...unitEntry, ...topicEntries]
  }),
)

export function TheoryPage() {
  const { state } = useApp()
  const [query, setQuery] = useState('')
  const scopedCourse = state.activeCourseId
    ? courses.find((course) => course.id === state.activeCourseId)
    : undefined
  const visibleCourses = scopedCourse ? [scopedCourse] : courses
  const visibleEntries = useMemo(
    () =>
      scopedCourse
        ? entries.filter((entry) => entry.course.id === scopedCourse.id)
        : entries,
    [scopedCourse],
  )
  const normalizedQuery = foldForSearch(query.trim())
  const filtered = useMemo(
    () =>
      normalizedQuery
        ? visibleEntries.filter((entry) => entry.searchable.includes(normalizedQuery))
        : visibleEntries,
    [normalizedQuery, visibleEntries],
  )

  const groups = visibleCourses
    .map((course) => ({
      course,
      items: filtered.filter((entry) => entry.course.id === course.id),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <div className="page">
      <header className="theory-hero">
        <span className="eyebrow">Teoria</span>
        <h1>
          {scopedCourse
            ? `La teoria di ${scopedCourse.name}, in un posto.`
            : 'Tutti gli argomenti, in un posto.'}
        </h1>
        <p className="lede">
          {scopedCourse
            ? `Cerca una regola, un tempo verbale o un dubbio del corso di ${scopedCourse.name}. Ogni scheda ha spiegazione, esempi ed esercizi dedicati.`
            : 'Cerca una regola, un tempo verbale o un dubbio. Ogni scheda ha spiegazione, esempi ed esercizi dedicati.'}
        </p>
        <div className="search-field">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cerca: passato, articoli, ser, accenti…"
            aria-label="Cerca un argomento di teoria"
            autoComplete="off"
            spellCheck={false}
          />
          {query && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setQuery('')}
              aria-label="Cancella la ricerca"
            >
              ×
            </button>
          )}
        </div>
        <p className="muted small">
          {filtered.length === visibleEntries.length
            ? `${visibleEntries.length} argomenti in ${visibleCourses.length} ${
                visibleCourses.length === 1 ? 'corso' : 'corsi'
              }`
            : `${filtered.length} ${filtered.length === 1 ? 'argomento trovato' : 'argomenti trovati'}`}
        </p>
      </header>

      {groups.length === 0 ? (
        <div className="card empty-state">
          <h2>Nessun argomento trovato</h2>
          <p className="muted">
            Prova con una parola più semplice, ad esempio «passato», «articoli» o «essere».
          </p>
          <button type="button" className="btn btn-secondary" onClick={() => setQuery('')}>
            Mostra tutti gli argomenti
          </button>
        </div>
      ) : (
        groups.map((group) => (
          <section className="section" key={group.course.id}>
            <div className="section-head theory-group-head">
              <div className="theory-group-title">
                <CourseMark course={group.course} />
                <div>
                  <h2>{group.course.name}</h2>
                  <p className="muted">
                    {group.items.length}{' '}
                    {group.items.length === 1 ? 'argomento' : 'argomenti'} ·{' '}
                    {group.course.level}
                  </p>
                </div>
              </div>
              <Link className="btn btn-ghost btn-small" to={`/corso/${group.course.id}`}>
                Vai al corso
              </Link>
            </div>
            <div className="theory-grid">
              {group.items.map((entry) => {
                const isUnit = entry.kind === 'unit'
                const title = isUnit ? entry.unit.title : entry.topic.title
                const subtitle = isUnit ? entry.unit.subtitle : entry.topic.subtitle
                const intro = isUnit ? entry.unit.intro : entry.topic.intro
                const sectionCount = isUnit
                  ? entry.unit.theory?.length ?? 0
                  : entry.topic.sections.length
                return (
                  <Link
                    className="card theory-card"
                    key={isUnit ? `unit-${entry.unit.id}` : entry.topic.id}
                    to={
                      isUnit
                        ? `/corso/${group.course.id}#${entry.unit.id}`
                        : `/grammatica/${group.course.id}/${entry.topic.id}`
                    }
                  >
                    <span className="eyebrow">
                      {isUnit
                        ? `${entry.unit.title} · Teoria dell'unità`
                        : `${entry.unit.title} · Grammatica`}
                    </span>
                    <h3>{title}</h3>
                    <p className="muted">{subtitle}</p>
                    {intro && <p className="theory-intro">{intro}</p>}
                    <span className="theory-meta">
                      {sectionCount} {sectionCount === 1 ? 'sezione' : 'sezioni'}
                      {isUnit
                        ? ' · Teoria completa'
                        : ` · ${entry.topic.exercises.length} esercizi`}
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>
        ))
      )}
    </div>
  )
}
