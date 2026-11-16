import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../state/AppContext'
import { SparkIcon } from './icons'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface Props {
  context: string
  /** Apre il pannello al primo rendering, utile nella pagina dedicata. */
  defaultOpen?: boolean
}

interface CompletionResponse {
  choices?: Array<{ message?: { content?: string } }>
  error?: { message?: string }
}

export function AIAssistant({ context, defaultOpen = false }: Props) {
  const { state } = useApp()
  const ai = state.settings.ai
  const configured = ai.enabled && ai.apiKey.trim().length > 0
  const [open, setOpen] = useState(defaultOpen)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function send(event: FormEvent) {
    event.preventDefault()
    const question = input.trim()
    if (!question || loading || !configured) return
    setInput('')
    setError(null)
    const history: ChatMessage[] = [...messages, { role: 'user', content: question }]
    setMessages(history)
    setLoading(true)
    try {
      const base = ai.baseUrl.trim().replace(/\/+$/, '')
      const response = await fetch(`${base}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ai.apiKey.trim()}`,
        },
        body: JSON.stringify({
          model: ai.model.trim(),
          temperature: 0.4,
          messages: [
            {
              role: 'system',
              content: [
                'Sei un tutor di lingue per studenti italofoni.',
                'Rispondi in italiano, in modo chiaro e conciso (massimo 150 parole).',
                'Puoi usare esempi nella lingua studiata con la traduzione italiana.',
                'Non inventare regole: se non sei sicuro, dillo.',
                'Contesto della lezione:',
                context,
              ].join('\n'),
            },
            ...history.map((message) => ({ role: message.role, content: message.content })),
          ],
        }),
      })
      if (!response.ok) {
        let detail = `Errore ${response.status}`
        try {
          const body = (await response.json()) as CompletionResponse
          if (body.error?.message) detail = body.error.message
        } catch {
          // Il provider potrebbe non restituire JSON.
        }
        throw new Error(detail)
      }
      const data = (await response.json()) as CompletionResponse
      const answer = data.choices?.[0]?.message?.content?.trim()
      if (!answer) throw new Error('Il provider non ha restituito una risposta.')
      setMessages([...history, { role: 'assistant', content: answer }])
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Errore di rete.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="ai-panel card">
      <button
        type="button"
        className="ai-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="ai-title">
          <span className="ai-badge" aria-hidden="true">
            <SparkIcon />
          </span>
          Chiedi all'assistente
        </span>
        <span className="ai-sub">Domande extra · configurazione opzionale</span>
      </button>

      {open && (
        <div className="ai-body">
          {!configured ? (
            <p className="ai-note">
              L'assistente AI è disattivato. Puoi attivarlo in{' '}
              <Link to="/impostazioni">Impostazioni</Link> inserendo una chiave API. Le FAQ
              della lezione funzionano sempre, anche offline.
            </p>
          ) : (
            <>
              {messages.length > 0 && (
                <div className="chat">
                  {messages.map((message, index) => (
                    <div
                      key={`${message.role}-${index}`}
                      className={`chat-bubble ${message.role === 'user' ? 'is-user' : 'is-assistant'}`}
                    >
                      {message.content}
                    </div>
                  ))}
                  {loading && <div className="chat-bubble is-assistant">Sto pensando…</div>}
                </div>
              )}
              {error && <p className="ai-error">{error}</p>}
              <form className="ai-form" onSubmit={send}>
                <input
                  className="text-input"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Es. Perché si dice “an apple”?"
                  disabled={loading}
                  aria-label="Domanda per l'assistente"
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading || input.trim().length === 0}
                >
                  Invia
                </button>
              </form>
              {messages.length > 0 && (
                <button
                  type="button"
                  className="btn btn-ghost btn-small ai-reset"
                  onClick={() => {
                    setMessages([])
                    setError(null)
                  }}
                >
                  Nuova conversazione
                </button>
              )}
              <p className="ai-disclaimer">
                Le risposte dell'AI possono contenere errori. La chiave API resta salvata solo in
                questo browser.
              </p>
            </>
          )}
        </div>
      )}
    </section>
  )
}
