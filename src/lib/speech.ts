/**
 * Sintesi vocale tramite le voci già presenti nel browser / sistema operativo.
 * Nessun servizio esterno: funziona anche offline se la voce è installata.
 */

export function speechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

export function speak(
  text: string,
  lang: string,
  rate: number,
  voiceURI?: string,
): boolean {
  if (!speechSupported()) return false
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  utterance.rate = rate
  utterance.pitch = 1
  const voices = window.speechSynthesis.getVoices()
  const base = lang.split('-')[0] ?? lang
  const voice =
    (voiceURI ? voices.find((item) => item.voiceURI === voiceURI) : undefined) ??
    voices.find((item) => item.lang === lang) ??
    voices.find((item) => item.lang.startsWith(base))
  if (voice) utterance.voice = voice
  window.speechSynthesis.speak(utterance)
  return true
}
