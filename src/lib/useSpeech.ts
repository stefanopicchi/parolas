import { useEffect, useState } from 'react'
import { useApp } from '../state/AppContext'
import { speak } from './speech'

export function useVoices(): SpeechSynthesisVoice[] {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    const update = () => setVoices(window.speechSynthesis.getVoices())
    update()
    window.speechSynthesis.addEventListener('voiceschanged', update)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', update)
  }, [])

  return voices
}

export type SpeakFn = (text: string, lang: string, courseId: string, slow?: boolean) => boolean

export function useSpeak(): SpeakFn {
  const { state } = useApp()
  return (text, lang, courseId, slow = false) => {
    const rate = slow ? state.settings.ttsRate * 0.7 : state.settings.ttsRate
    return speak(text, lang, rate, state.settings.voices[courseId])
  }
}
