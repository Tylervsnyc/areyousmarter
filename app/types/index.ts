export type Pattern = 'paper' | 'grid' | 'dots' | 'brush' | 'waves'
export type Tone = 'warm' | 'cool' | 'light'

export interface Chapter {
  title: string
  subtitle: string
  questions: Question[]
  readStoryLink: string
  theme?: {
    pattern?: Pattern
    tone?: Tone
  }
}

export interface BaseQuestion {
  id: string
  text: string
  type: 'multiple-choice' | 'sorting' | 'matching'
  explanation?: string
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice'
  options: string[]
  correctAnswer: string
}

export interface SortingQuestion extends BaseQuestion {
  type: 'sorting'
  items: Array<{
    id: string
    name: string
    emoji: string
    isCorrectlySafe: boolean
  }>
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching'
  pairs: Array<{
    id: number
    leftText: string
    rightText: string
  }>
}

export type Question = MultipleChoiceQuestion | SortingQuestion | MatchingQuestion

export interface NameInputTemplateProps {
  id: string
}

export interface ChapterTemplateProps {
  id: string
  title: string
  subtitle: string
  readStoryLink: string
  beginQuizLink: string
  theme?: {
    pattern?: Pattern
    tone?: Tone
  }
}

export interface QuizTemplateProps {
  id: string
  ageRange: string
  name: string
  chapter: Chapter
}

export interface ResultsTemplateProps {
  id: string
  score: number
  name: string
  ageRange: string
  chapter: Chapter
}

export interface ChapterData extends Chapter {
  id: string
}

export interface QuizState {
  currentQuestionIndex: number
  score: number
  answers: string[]
  isAnswered: boolean
  message: string
  messageType: 'correct' | 'incorrect' | null
}

export interface QuizProps {
  id: string
  ageRange: string
  name: string
  chapter: Chapter
}

export interface ResultsProps {
  id: string
  score: number
  name: string
  ageRange: string
  chapter: Chapter
} 