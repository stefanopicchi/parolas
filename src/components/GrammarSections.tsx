import { useMemo } from 'react'
import type { GrammarSection } from '../content/types'
import { useSpeak } from '../lib/useSpeech'
import { SpeakerIcon } from './icons'

interface Props {
  sections: GrammarSection[]
  courseId: string
  lang: string
  /** Prefisso per le chiavi, utile quando più blocchi convivono nella stessa pagina. */
  idPrefix?: string
}

/**
 * Colonne di tabelle che contengono spiegazioni in italiano o etichette
 * grammaticali: non vanno lette con la voce della lingua studiata.
 */
const QUIET_HEADERS = new Set([
  'italiano',
  'perché',
  'perche',
  'regola',
  'uso',
  'significato',
  'struttura',
  'note',
  'spiegazione',
  'traduzione',
  'quando',
  'genere',
  'numero',
  'genere / numero',
])

/** Etichette grammaticali che a volte compaiono dentro le celle. */
const QUIET_CELLS = new Set([
  'determinativo',
  'indeterminativo',
  'singolare',
  'plurale',
  'maschile singolare',
  'femminile singolare',
  'maschile plurale',
  'femminile plurale',
])

function isSpeakableCell(text: string, header: string): boolean {
  const value = text.trim()
  if (!value || !/[a-zà-ÿ]/i.test(value)) return false
  const title = header.trim().toLowerCase()
  if (QUIET_HEADERS.has(title)) return false
  if (QUIET_CELLS.has(value.toLowerCase())) return false
  if (value.length > 140) return false
  // Notazione grammaticale, es. "ir a + infinitivo" o "e → ie".
  if (/[→+]/.test(value) && value.split(/\s+/).length <= 5) return false
  return true
}

/** Ripulisce separatori e virgolette prima di passarli al sintetizzatore. */
function toSpeech(text: string): string {
  return text
    .replace(/[«»"]/g, '')
    .replace(/\s*\/\s*/g, ', ')
    .replace(/\s*[—–]\s*/g, ', ')
    .replace(/\s*→\s*/g, ', ')
    .replace(/\s+/g, ' ')
    .trim()
}

function hasAudio(sections: GrammarSection[]): boolean {
  return sections.some(
    (section) =>
      Boolean(section.examples?.length) ||
      Boolean(
        section.table?.rows.some((row) =>
          row.some((cell, index) => isSpeakableCell(cell, section.table!.headers[index] ?? '')),
        ),
      ),
  )
}

export function GrammarSections({ sections, courseId, lang, idPrefix = 'sezione' }: Props) {
  const speak = useSpeak()
  const audio = useMemo(() => hasAudio(sections), [sections])

  return (
    <>
      {audio && (
        <p className="theory-listen-hint">
          <SpeakerIcon />
          Tocca l'altoparlante accanto a una parola o a un esempio per ascoltarlo.
        </p>
      )}
      {sections.map((section, index) => (
        <section className="grammar-section" key={`${idPrefix}-${section.heading ?? index}-${index}`}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs?.map((paragraph, paragraphIndex) => (
            <p className="prose" key={paragraphIndex}>
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="bullets">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
          {section.table && (
            <div className="table-wrap">
              <table className="grammar-table">
                <thead>
                  <tr>
                    {section.table.headers.map((header) => (
                      <th key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => {
                        const header = section.table!.headers[cellIndex] ?? ''
                        if (!isSpeakableCell(cell, header)) {
                          return <td key={cellIndex}>{cell}</td>
                        }
                        return (
                          <td key={cellIndex}>
                            <button
                              type="button"
                              className="cell-speak"
                              onClick={() => speak(toSpeech(cell), lang, courseId)}
                              aria-label={`Ascolta: ${cell}`}
                            >
                              <span>{cell}</span>
                              <SpeakerIcon />
                            </button>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {section.examples && (
            <ul className="examples">
              {section.examples.map((example) => (
                <li key={`${example.target}-${example.italian}`}>
                  <span className="example-target">
                    {example.target}
                    <button
                      type="button"
                      className="example-speak"
                      onClick={() => speak(toSpeech(example.target), lang, courseId)}
                      aria-label={`Ascolta: ${example.target}`}
                      title="Ascolta"
                    >
                      <SpeakerIcon />
                    </button>
                  </span>
                  <span className="example-it">{example.italian}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  )
}
