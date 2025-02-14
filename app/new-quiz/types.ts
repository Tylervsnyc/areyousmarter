export type Pattern = 'dots' | 'paws' | 'stars' | 'hearts'
export type Tone = 'light' | 'dark' | 'blue' | 'green' | 'red'

export interface Theme {
  pattern: Pattern
  tone: Tone
}

export interface Question {
  id: string
  type: 'multiple-choice'
  question: string
  options: string[]
  answer: string
  explanation: string
}

export interface QuestionsByAge {
  age4to5: Question[]
  age6to7: Question[]
  age8to9: Question[]
}

export interface Chapter {
  title: string
  subtitle: string
  questions: QuestionsByAge
  readStoryLink: string
  theme: Theme
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

export const getRandomQuip = (isCorrect: boolean) => {
  const quips = isCorrect ? rightAnswerQuips : wrongAnswerQuips
  return quips[Math.floor(Math.random() * quips.length)]
}

export const playSound = (isCorrect: boolean) => {
  const sound = new Audio(isCorrect ? '/sounds/correct.wav' : '/sounds/incorrect.wav')
  sound.play().catch(console.error)
} 