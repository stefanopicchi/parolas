/**
 * Normalizza una risposta digitata: maiuscole, punteggiatura e spazi.
 * Gli accenti restano significativi, così «esta» e «está» non sono equivalenti.
 */
export function normalizeAnswer(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFC')
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/ß/g, 'ss')
    .replace(/[’‘`]/g, "'")
    .replace(/[.,!?;:¡¿"«»]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Versione senza accenti, usata solo per la ricerca testuale. */
export function foldForSearch(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Compone un conteggio con la forma singolare o plurale corretta. */
export function plural(count: number, singular: string, many: string): string {
  return `${count} ${count === 1 ? singular : many}`
}

/** Confronta due risposte ignorando accenti e punteggiatura. */
export function sameIgnoringAccents(a: string, b: string): boolean {
  return foldForSearch(normalizeAnswer(a)) === foldForSearch(normalizeAnswer(b))
}

/** Tronca un testo per le anteprime, senza spezzare le parole. */
export function truncate(value: string, max = 80): string {
  if (value.length <= max) return value
  return `${value.slice(0, max).trimEnd()}…`
}

/** Sceglie un elemento a caso in modo stabile a partire da un seme. */
export function seededShuffle<T>(items: T[], seed: string): T[] {
  const result = [...items]
  let hash = 2166136261
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  for (let i = result.length - 1; i > 0; i -= 1) {
    hash = Math.imul(hash ^ (hash >>> 13), 1274126177)
    const j = Math.abs(hash) % (i + 1)
    const temp = result[i]!
    result[i] = result[j]!
    result[j] = temp
  }
  return result
}
