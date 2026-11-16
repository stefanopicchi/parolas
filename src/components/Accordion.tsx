import type { FaqItem } from '../content/types'

export function Accordion({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <details className="accordion-item" key={`${item.question}-${index}`}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
