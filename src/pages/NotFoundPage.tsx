import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="page">
      <div className="card empty-state">
        <span className="eyebrow">404</span>
        <h1>Pagina non trovata</h1>
        <p className="muted">Il collegamento non esiste oppure il contenuto è stato spostato.</p>
        <Link className="btn btn-primary" to="/">
          Torna alla home
        </Link>
      </div>
    </div>
  )
}
