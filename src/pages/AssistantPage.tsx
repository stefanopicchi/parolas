import { Link } from 'react-router-dom'
import { AIAssistant } from '../components/AIAssistant'
import { SparkIcon } from '../components/icons'
import { courseById } from '../content'
import { useApp } from '../state/AppContext'

export function AssistantPage() {
  const { state } = useApp()
  const ai = state.settings.ai
  const configured = ai.enabled && ai.apiKey.trim().length > 0
  const course = state.activeCourseId ? courseById.get(state.activeCourseId) : undefined
  const context = course
    ? [
        `Corso attivo: ${course.name} (${course.nativeName}), livello ${course.level}.`,
        'Rispondi a domande su vocaboli, grammatica ed esercizi di questo corso.',
        'Se la domanda riguarda una lezione specifica, chiedi pure quale lezione.',
      ].join(' ')
    : [
        'Nessun corso attivo: rispondi a domande generali sull’apprendimento delle lingue.',
        'I corsi disponibili nell’app sono inglese, spagnolo, francese e tedesco.',
      ].join(' ')

  return (
    <div className="page">
      <header className="assistant-hero">
        <span className="eyebrow">Assistente AI</span>
        <h1>Una domanda in più, quando serve.</h1>
        <p className="lede">
          L'assistente risponde a dubbi su regole, vocaboli ed esercizi. È opzionale:
          funziona con una chiave API compatibile con OpenAI, oppure resta spento e lasci
          spazio alle FAQ già incluse nelle lezioni.
        </p>
        <div className="assistant-status">
          <span className={`status-pill${configured ? ' is-on' : ''}`}>
            <SparkIcon />
            {configured ? 'Assistente attivo' : 'Assistente non configurato'}
          </span>
          {configured && <span className="status-pill">Modello: {ai.model || '—'}</span>}
          <span className="status-pill">
            Contesto: {course ? course.name : 'nessun corso attivo'}
          </span>
        </div>
      </header>

      <div className="assistant-grid">
        <AIAssistant context={context} defaultOpen />

        <section className="card assistant-info">
          <h2>Come funziona</h2>
          <p className="muted">
            L'app non include un modello suo: la richiesta parte dal browser e va
            direttamente al provider che configuri. La chiave resta salvata solo su questo
            dispositivo.
          </p>
          <ol className="assistant-steps">
            <li>
              <strong>Apri le impostazioni</strong> e attiva l'assistente nella sezione
              dedicata.
            </li>
            <li>
              <strong>Inserisci URL base, modello e chiave API</strong> del provider
              compatibile con OpenAI.
            </li>
            <li>
              <strong>Fai la domanda</strong> qui o in fondo a una lezione: il contesto del
              corso attivo viene passato automaticamente.
            </li>
          </ol>

          {configured ? (
            <div className="assistant-config">
              <span>
                Modello: <code>{ai.model || '—'}</code>
              </span>
              <span>
                Endpoint: <code>{ai.baseUrl || '—'}</code>
              </span>
              <span>
                Chiave: <code>salvata nel browser</code>
              </span>
            </div>
          ) : (
            <div className="result-actions">
              <Link className="btn btn-primary" to="/impostazioni">
                Configura l'assistente
              </Link>
            </div>
          )}

          <p className="hint">
            Le risposte dell'AI possono contenere errori. Le FAQ e la teoria dell'app
            funzionano sempre, anche offline.
          </p>
        </section>
      </div>
    </div>
  )
}
