import type { PaletteId, ThemeMode } from './storage'

export interface ThemeOption {
  id: ThemeMode
  label: string
  hint: string
}

export interface PaletteOption {
  id: PaletteId
  label: string
  /** Colore di anteprima, allineato alle variabili di styles.css. */
  preview: string
  previewDark: string
}

export const themeOptions: ThemeOption[] = [
  { id: 'auto', label: 'Automatico', hint: 'Segue il tema del sistema' },
  { id: 'light', label: 'Chiaro', hint: 'Sfondo luminoso' },
  { id: 'dark', label: 'Scuro', hint: 'Meno luce la sera' },
]

export const paletteOptions: PaletteOption[] = [
  { id: 'viola', label: 'Viola', preview: '#6d3bf5', previewDark: '#b195ff' },
  { id: 'corallo', label: 'Corallo', preview: '#e2552c', previewDark: '#ff9270' },
  { id: 'verde', label: 'Verde', preview: '#0e9f6e', previewDark: '#5fe3b4' },
  { id: 'oceano', label: 'Oceano', preview: '#0b6fda', previewDark: '#6cb6ff' },
]

export function resolvedTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode !== 'auto') return mode
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Applica tema e palette su <html> e aggiorna la barra del browser. */
export function applyAppearance(mode: ThemeMode, palette: PaletteId): void {
  const root = document.documentElement
  const theme = resolvedTheme(mode)
  root.dataset.theme = theme
  root.dataset.palette = palette
  root.style.colorScheme = theme

  const background = getComputedStyle(root).getPropertyValue('--bg').trim()
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta && background) meta.setAttribute('content', background)
}
