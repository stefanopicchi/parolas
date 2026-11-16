import { Link, NavLink } from 'react-router-dom'
import { useApp } from '../state/AppContext'
import { SparkIcon } from './icons'

export function Header() {
  const { state } = useApp()
  const reviewCount = state.activeCourseId
    ? state.review.filter((item) => item.courseId === state.activeCourseId).length
    : state.review.length
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link to="/" className="brand" aria-label="Parolas, pagina iniziale">
          <span className="brand-mark">P</span>
          <span className="brand-name">Parolas</span>
        </Link>
        <nav className="nav" aria-label="Navigazione principale">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
          >
            {state.activeCourseId ? 'Il mio corso' : 'Corsi'}
          </NavLink>
          <NavLink
            to="/teoria"
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
          >
            Teoria
          </NavLink>
          <NavLink
            to="/vocabolario"
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
          >
            Vocabolario
          </NavLink>
          <NavLink
            to="/ripasso"
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
          >
            Ripasso
            {reviewCount > 0 && <span className="nav-badge">{reviewCount}</span>}
          </NavLink>
          <NavLink
            to="/assistente"
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
          >
            <SparkIcon /> Assistente
          </NavLink>
          <NavLink
            to="/impostazioni"
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
          >
            Impostazioni
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Progressi salvati solo su questo dispositivo. Niente account, niente streak: solo
          studio.
        </p>
      </div>
    </footer>
  )
}
