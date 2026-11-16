import type { GrammarSection } from '../content/types'

interface Props {
  sections: GrammarSection[]
  /** Prefisso per le chiavi, utile quando più blocchi convivono nella stessa pagina. */
  idPrefix?: string
}

export function GrammarSections({ sections, idPrefix = 'sezione' }: Props) {
  return (
    <>
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
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
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
                  <span className="example-target">{example.target}</span>
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
