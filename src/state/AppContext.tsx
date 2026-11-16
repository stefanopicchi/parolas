import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import type { Dispatch, ReactNode } from 'react'
import {
  createInitialState,
  emptyCourseProgress,
  loadState,
  saveState,
} from '../lib/storage'
import type { AppState, CourseProgress, ProgressRecord, Settings } from '../lib/storage'
import { applyAppearance } from '../lib/theme'

export interface SessionResult {
  correct: number
  total: number
  correctKeys: string[]
  wrongKeys: string[]
}

export type Action =
  | { type: 'setActiveCourse'; courseId: string | null }
  | {
      type: 'recordSession'
      courseId: string
      kind: 'lesson' | 'grammar'
      id: string
      result: SessionResult
    }
  | { type: 'reviewResult'; result: SessionResult }
  | { type: 'updateSettings'; patch: Partial<Settings> }
  | { type: 'clearReview'; courseId?: string }
  | { type: 'resetCourse'; courseId: string }
  | { type: 'resetProgress' }
  | { type: 'resetAll' }
  | { type: 'restoreBackup'; state: AppState }

interface AppContextValue {
  state: AppState
  dispatch: Dispatch<Action>
}

const AppContext = createContext<AppContextValue | null>(null)

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'setActiveCourse': {
      if (state.activeCourseId === action.courseId) return state
      return { ...state, activeCourseId: action.courseId }
    }

    case 'recordSession': {
      const course = state.courses[action.courseId] ?? emptyCourseProgress()
      const previous =
        action.kind === 'lesson' ? course.lessons[action.id] : course.grammar[action.id]
      const score =
        action.result.total > 0
          ? Math.round((action.result.correct / action.result.total) * 100)
          : 0
      const record: ProgressRecord = {
        completed: true,
        bestScore: Math.max(previous?.bestScore ?? 0, score),
        lastScore: score,
        attempts: (previous?.attempts ?? 0) + 1,
        lastAt: Date.now(),
      }
      const updatedCourse: CourseProgress =
        action.kind === 'lesson'
          ? { ...course, lessons: { ...course.lessons, [action.id]: record } }
          : { ...course, grammar: { ...course.grammar, [action.id]: record } }

      let review = state.review
      if (action.result.correctKeys.length > 0) {
        const correct = new Set(action.result.correctKeys)
        review = review.filter((item) => !correct.has(item.key))
      }
      if (action.result.wrongKeys.length > 0) {
        const wrong = new Set(action.result.wrongKeys)
        const known = new Set(review.map((item) => item.key))
        review = review.map((item) =>
          wrong.has(item.key) ? { ...item, misses: item.misses + 1 } : item,
        )
        for (const key of action.result.wrongKeys) {
          if (!known.has(key)) {
            review.push({
              key,
              courseId: action.courseId,
              addedAt: Date.now(),
              misses: 1,
            })
          }
        }
      }

      return {
        ...state,
        activeCourseId: state.activeCourseId ?? action.courseId,
        courses: { ...state.courses, [action.courseId]: updatedCourse },
        review,
      }
    }

    case 'reviewResult': {
      let review = state.review
      if (action.result.correctKeys.length > 0) {
        const correct = new Set(action.result.correctKeys)
        review = review.filter((item) => !correct.has(item.key))
      }
      if (action.result.wrongKeys.length > 0) {
        const wrong = new Set(action.result.wrongKeys)
        review = review.map((item) =>
          wrong.has(item.key) ? { ...item, misses: item.misses + 1 } : item,
        )
      }
      return { ...state, review }
    }

    case 'updateSettings':
      return { ...state, settings: { ...state.settings, ...action.patch } }

    case 'clearReview':
      return {
        ...state,
        review: action.courseId
          ? state.review.filter((item) => item.courseId !== action.courseId)
          : [],
      }

    case 'resetCourse': {
      const nextCourses = { ...state.courses }
      delete nextCourses[action.courseId]
      return {
        ...state,
        courses: nextCourses,
        review: state.review.filter((item) => item.courseId !== action.courseId),
        activeCourseId:
          state.activeCourseId === action.courseId ? null : state.activeCourseId,
      }
    }

    case 'resetProgress':
      return {
        ...state,
        activeCourseId: null,
        courses: {},
        review: [],
      }

    case 'resetAll':
      return createInitialState()

    case 'restoreBackup':
      return action.state

    default:
      return state
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState)

  useEffect(() => {
    saveState(state)
  }, [state])

  useEffect(() => {
    const { theme, palette } = state.settings
    applyAppearance(theme, palette)
    if (theme !== 'auto' || typeof window.matchMedia !== 'function') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const sync = () => applyAppearance('auto', palette)
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [state.settings.theme, state.settings.palette])

  const value = useMemo(() => ({ state, dispatch }), [state])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp(): AppContextValue {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp deve essere usato dentro AppProvider')
  }
  return context
}
