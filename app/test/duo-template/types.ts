// Question Types
export type QuestionType = 'multiple-choice' | 'sorting' | 'matching'

// Base Question Interface
export interface BaseQuestion {
  id: number
  type: QuestionType
  question: string
  explanation?: string
}

// Multiple Choice Question
export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice'
  options: string[]
  correctAnswer: string
}

// Sorting Question
export interface SortingQuestion extends BaseQuestion {
  type: 'sorting'
  items: {
    id: string
    name: string
    emoji: string
    isCorrectlySafe: boolean
  }[]
}

// Matching Question
export interface MatchingQuestion extends BaseQuestion {
  type: 'matching'
  pairs: {
    id: number
    leftText: string
    rightText: string
  }[]
}

export type Question = MultipleChoiceQuestion | SortingQuestion | MatchingQuestion

// Feedback Messages
export const rightAnswerQuips = [
  "Purrfectly calculated!",
  "Almost as smart as a cat!",
  "You've earned a royal head bump!",
  "My whiskers are tingling with approval!",
  "Not bad for a two-legged creature!",
  "You're making this cat purr with pride!",
  "Finally, a human who can count!",
  "My royal mathematician!",
  "Better than chasing laser dots!",
  "You've pleased His Majesty!"
]

export const wrongAnswerQuips = [
  "Try again!",
  "Even a sleeping cat counts better!",
  "Did you count on your toes?",
  "Is that your final answer?",
  "My litterbox math is better than that!",
  "Wrong!",
  "Were you distracted by a red dot?",
  "Did a dog help you with that?",
  "No, no, no!",
  "Back to math class with you!"
]

// Helper Functions
export const getRandomQuip = (isCorrect: boolean) => {
  const quips = isCorrect ? rightAnswerQuips : wrongAnswerQuips
  return quips[Math.floor(Math.random() * quips.length)]
}

// Navigation Types
export interface NavigationState {
  currentQuestion: number
  totalQuestions: number
  score: number
  name: string
}

// Sound Effects
export const playSound = (isCorrect: boolean) => {
  const sound = new Audio(isCorrect ? '/sounds/correct.wav' : '/sounds/incorrect.wav')
  sound.play().catch(console.error)
}

// Feedback State
export interface FeedbackState {
  show: boolean
  isCorrect: boolean
  message: string
  explanation?: string
} 