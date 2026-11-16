import { Link } from 'react-router-dom'
import { CourseCard } from '../components/CourseCard'
import { CourseMark } from '../components/CourseMark'
import { SparkIcon } from '../components/icons'
import { ProgressBar } from '../components/ProgressBar'
import { courseById, courses } from '../content'
import { nextLessonFor, reviewCountFor, statsFor } from '../lib/progress'
import { useApp } from '../state/AppContext'

export function HomePage() {
  const { state, dispatch } = useApp()
  const activeCourse = state.activeCourseId ? courseById.get(state.activeCourseId) : undefined
  const activeProgress = activeCourse ? state.courses[activeCourse.id] : undefined
  const stats = activeCourse ? statsFor(activeCourse, activeProgress) : null
  const next = activeCourse ? nextLessonFor(activeCourse, activeProgress) : null
  const activeReview = activeCourse ? reviewCountFor(state.review, activeCourse.id) : 0

  function changeLanguage() {
    dispatch({ type: 'setActiveCourse', courseId: null })
  }

  if (activeCourse && stats) {
    const unitsTotal = activeCourse.units.length
    return (
      <div className="page">
        <section className="welcome">
          <span className="eyebrow">Il tuo corso</span>
          <h1>{activeCourse.name}, un passo alla volta.</h1>
          <p className="lede">
            Stai seguendo solo {activeCourse.name}. Le altre lingue restano nascoste finché non
            torni al menù iniziale.
          </p>
        </section>

        <section className="section">
          <div className="card continue-card">
            <div className="continue-head">
              <CourseMark course={activeCourse} />
              <div>
                <span className="eyebrow">{activeCourse.nativeName}</span>
                <h2>{activeCourse.name}</h2>
              </div>
              <span className="continue-percent">{stats.percent}%</span>
            </div>
            <ProgressBar value={stats.percent} />
            <div className="continue-meta">
              <span>
                {stats.lessonsDone}/{stats.lessonsTotal} lezioni
              </span>
              <span>
                {stats.topicsDone}/{stats.topicsTotal} schede di grammatica
              </span>
              <span>{unitsTotal} unità</span>
              {activeReview > 0 && (
                <Link to="/ripasso">
                  {activeReview === 1
                    ? '1 esercizio da ripassare'
                    : `${activeReview} esercizi da ripassare`}
                </Link>
              )}
            </div>
            {next ? (
              <div className="continue-next">
                <div>
                  <span className="muted small">{next.unit.title} · prossima lezione</span>
                  <strong>{next.lesson.title}</strong>
                  <span className="muted small">{next.lesson.subtitle}</span>
                </div>
                <Link
                  className="btn btn-primary"
                  to={`/lezione/${activeCourse.id}/${next.lesson.id}`}
                >
                  Continua
                </Link>
              </div>
            ) : (
              <div className="continue-next">
                <div>
                  <strong>Hai completato tutte le lezioni.</strong>
                  <span className="muted small">
                    Puoi rivedere la grammatica o ripassare gli errori.
                  </span>
                </div>
                <Link className="btn btn-secondary" to={`/corso/${activeCourse.id}`}>
                  Vai al corso
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className="section">
          <div className="home-shortcuts">
            <Link className="card shortcut" to={`/corso/${activeCourse.id}`}>
              <span className="eyebrow">Percorso</span>
              <strong>Il corso completo</strong>
              <span className="muted small">
                {unitsTotal} unità, {stats.lessonsTotal} lezioni e {stats.topicsTotal} schede di
                grammatica.
              </span>
              <span className="shortcut-cta">Apri il corso →</span>
            </Link>
            <Link className="card shortcut" to="/teoria">
              <span className="eyebrow">Teoria</span>
              <strong>Regole e spiegazioni</strong>
              <span className="muted small">
                Tutta la teoria di {activeCourse.name}, con la ricerca per argomento.
              </span>
              <span className="shortcut-cta">Cerca nella teoria →</span>
            </Link>
            <Link className="card shortcut" to="/vocabolario">
              <span className="eyebrow">Vocabolario</span>
              <strong>Una parola alla volta</strong>
              <span className="muted small">
                Traduci in italiano o in {activeCourse.name.toLowerCase()}, con la scheda
                dizionario dopo ogni risposta.
              </span>
              <span className="shortcut-cta">Allena il vocabolario →</span>
            </Link>
            <Link className="card shortcut" to="/ripasso">
              <span className="eyebrow">Ripasso</span>
              <strong>Gli errori da rivedere</strong>
              <span className="muted small">
                {activeReview === 0
                  ? 'La coda è vuota: continua con la prossima lezione.'
                  : `${activeReview} ${activeReview === 1 ? 'esercizio' : 'esercizi'} in attesa.`}
              </span>
              <span className="shortcut-cta">Vai al ripasso →</span>
            </Link>
          </div>
        </section>

        <section className="section">
          <Link className="ai-home-banner" to="/assistente">
            <span className="ai-badge" aria-hidden="true">
              <SparkIcon />
            </span>
            <span className="ai-home-text">
              <strong>Hai una domanda su una regola?</strong>
              <span className="muted small">
                L'assistente AI può rispondere, se lo configuri. È opzionale e resta spento
                finché non lo attivi.
              </span>
            </span>
            <span className="shortcut-cta">Apri l'assistente →</span>
          </Link>
        </section>

        <section className="section language-switch">
          <div>
            <h2>Vuoi cambiare lingua?</h2>
            <p className="muted">
              Torna al menù iniziale per scegliere un altro corso. I progressi di{' '}
              {activeCourse.name} restano salvati.
            </p>
          </div>
          <button type="button" className="btn btn-secondary" onClick={changeLanguage}>
            Torna al menù iniziale
          </button>
        </section>
      </div>
    )
  }

  return (
    <div className="page">
      <section className="hero">
        <span className="eyebrow">Impara con metodo</span>
        <h1>Le lingue, senza distrazioni.</h1>
        <p className="lede">
          Lezioni guidate, grammatica spiegata e ripasso mirato. Niente personaggi, monete o
          streak da mantenere.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href="#corsi">
            Scegli un corso
          </a>
          <Link className="btn btn-secondary btn-lg" to="/vocabolario">
            Prova il vocabolario
          </Link>
        </div>
      </section>

      <section id="corsi" className="section">
        <div className="section-head">
          <h2>Scegli un corso</h2>
          <p className="muted">
            Contenuti scritti a mano, stesso metodo per ogni lingua: lezione, grammatica,
            ripasso.
          </p>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="features">
          <div className="card feature">
            <span className="feature-icon">1</span>
            <h3>Lezioni guidate</h3>
            <p>Vocaboli, esercizi e feedback immediato, con un obiettivo chiaro ogni volta.</p>
          </div>
          <div className="card feature">
            <span className="feature-icon">2</span>
            <h3>Grammatica vera</h3>
            <p>Spiegazioni, tabelle ed esempi. Poi esercizi dedicati all'argomento.</p>
          </div>
          <div className="card feature">
            <span className="feature-icon">3</span>
            <h3>Ripasso mirato</h3>
            <p>Gli esercizi sbagliati tornano in una coda di ripasso, senza punteggi da difendere.</p>
          </div>
          <div className="card feature">
            <span className="feature-icon">4</span>
            <h3>Vocabolario attivo</h3>
            <p>Una parola alla volta, nelle due direzioni, con la scheda dizionario.</p>
          </div>
          <div className="card feature">
            <span className="feature-icon">5</span>
            <h3>Assistente opzionale</h3>
            <p>Domande extra con la tua chiave API. Se non ti serve, resta spento.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
