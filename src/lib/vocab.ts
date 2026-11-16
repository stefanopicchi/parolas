import type { VocabularyItem } from '../content'
import { normalizeAnswer, seededShuffle } from './text'

export type VocabDirection = 'toItalian' | 'fromItalian'

export const VOCAB_SESSION_SIZE = 12

const LEADING_ARTICLE =
  /^(el|la|los|las|un|una|unos|unas|lo|il|i|gli|le|uno|dei|degli|delle|dello|della)\s+/
const LEADING_ELISION = /^(l'|un'|all'|dall'|nell'|sull')/

function clean(value: string): string {
  return normalizeAnswer(value)
    .replace(/…/g, '')
    .replace(/\.\.\./g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function stripArticle(value: string): string {
  return value.replace(LEADING_ARTICLE, '').replace(LEADING_ELISION, '').trim()
}

function expand(value: string, splitCommas: boolean): string[] {
  const parts = splitCommas ? value.split(/[/,]/) : value.split('/')
  return [value, ...parts].map(clean).filter(Boolean)
}

/** Tutte le risposte accettate per una voce, nella direzione scelta. */
export function acceptableAnswers(
  item: VocabularyItem,
  direction: VocabDirection,
): string[] {
  const values =
    direction === 'toItalian'
      ? item.translations.flatMap((translation) => expand(translation, true))
      : expand(item.term, false)
  return Array.from(new Set(values))
}

/** Testo mostrato come domanda. */
export function vocabularyPrompt(
  item: VocabularyItem,
  direction: VocabDirection,
): string {
  return direction === 'toItalian' ? item.term : item.translations.join(' / ')
}

/** Soluzione mostrata dopo la verifica. */
export function vocabularySolution(
  item: VocabularyItem,
  direction: VocabDirection,
): string {
  return direction === 'toItalian'
    ? item.translations.join(' / ')
    : item.term
}

/** Confronto tollerante: articoli iniziali e varianti non contano. */
export function checkVocabularyAnswer(input: string, accepted: string[]): boolean {
  const typed = clean(input)
  if (!typed) return false
  const typedForms = new Set([typed, stripArticle(typed)])
  return accepted.some((answer) => {
    const normalized = clean(answer)
    return typedForms.has(normalized) || typedForms.has(stripArticle(normalized))
  })
}

export function pickVocabularySession(
  items: VocabularyItem[],
  seed: string,
  size = VOCAB_SESSION_SIZE,
): VocabularyItem[] {
  return seededShuffle(items, seed).slice(0, Math.min(size, items.length))
}

export function newVocabularySeed(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}
