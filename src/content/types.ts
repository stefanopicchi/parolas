export interface VocabItem {
  term: string
  translation: string
  example?: string
  exampleTranslation?: string
}

interface ExerciseBase {
  id: string
  explanation?: string
}

export interface MultipleChoiceExercise extends ExerciseBase {
  type: 'multiple-choice'
  question: string
  options: string[]
  correct: number
}

export interface TranslationExercise extends ExerciseBase {
  type: 'translation'
  /** Frase da tradurre, in italiano. */
  prompt: string
  /** Tutte le traduzioni accettate, nella lingua studiata. */
  answers: string[]
  hint?: string
}

export interface FillBlankExercise extends ExerciseBase {
  type: 'fill-blank'
  /** Frase con uno spazio indicato da ___. */
  sentence: string
  answers: string[]
  translation?: string
}

export interface WordOrderExercise extends ExerciseBase {
  type: 'word-order'
  /** Significato della frase, in italiano. */
  prompt: string
  /** Parole nell'ordine corretto. */
  answer: string[]
  /** Parole mostrate all'utente; se assente si usano quelle della risposta. */
  words?: string[]
}

export interface ListeningExercise extends ExerciseBase {
  type: 'listening'
  /** Testo pronunciato dal sintetizzatore vocale. */
  audioText: string
  question: string
  options: string[]
  correct: number
}

export type Exercise =
  | MultipleChoiceExercise
  | TranslationExercise
  | FillBlankExercise
  | WordOrderExercise
  | ListeningExercise

export type ExerciseSpec =
  | Omit<MultipleChoiceExercise, 'id'>
  | Omit<TranslationExercise, 'id'>
  | Omit<FillBlankExercise, 'id'>
  | Omit<WordOrderExercise, 'id'>
  | Omit<ListeningExercise, 'id'>

export interface FaqItem {
  question: string
  answer: string
}

export interface Lesson {
  id: string
  title: string
  subtitle: string
  objectives: string[]
  vocab: VocabItem[]
  exercises: Exercise[]
  faq: FaqItem[]
}

export interface GrammarExample {
  target: string
  italian: string
}

export interface GrammarTable {
  headers: string[]
  rows: string[][]
}

export interface GrammarSection {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
  table?: GrammarTable
  examples?: GrammarExample[]
}

export interface GrammarTopic {
  id: string
  title: string
  subtitle: string
  intro: string
  sections: GrammarSection[]
  exercises: Exercise[]
  faq: FaqItem[]
}

export interface Unit {
  id: string
  title: string
  subtitle: string
  /** Breve introduzione teorica mostrata all'inizio dell'unità. */
  intro?: string
  /** Punti chiave da tenere a mente prima degli esercizi. */
  keyPoints?: string[]
  /** Teoria estesa dell'unità, mostrata prima delle lezioni. */
  theory?: GrammarSection[]
  lessons: Lesson[]
  grammar: GrammarTopic[]
}

export interface Course {
  id: string
  /** Nome in italiano, es. "Inglese". */
  name: string
  /** Nome nella lingua studiata, es. "English". */
  nativeName: string
  description: string
  level: string
  /** Codice BCP-47 usato dal sintetizzatore vocale, es. "en-US". */
  ttsLang: string
  units: Unit[]
}
