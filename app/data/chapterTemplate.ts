import { Pattern, Tone } from '../types'

export interface ChapterConfig {
  id: string
  title: string
  subtitle: string
  readStoryLink: string
  quizLink: string
  metadata: {
    host: {
      name: string
      type: string
      traits: string[]
      description: string
    }
    financial_tracker: {
      bike_goal: number
      starting_balance: number
      money_earned: number
      current_balance: number
      remaining_goal: number
    }
    theme: {
      pattern: Pattern
      tone: Tone
    }
  }
  screens: {
    intro: {
      title: string
      subtitle: string
      opening_greeting: string
      description: string
      progress_message: string
      host_image: string
      button_text: string
    }
    name_selection: {
      title: string
      greeting: string
      button_text: string
      theme: {
        pattern: Pattern
        tone: Tone
      }
    }
    age_selection: {
      title: string
      greeting: string
      age_responses: {
        "6-7": string
        "8-9": string
        baby: string
        ship: string
      }
      sassy_responses: string[]
      final_warning: string
      age_groups: {
        younger: string
        older: string
        goof_options: {
          baby: string
          ship: string
        }
      }
      theme: {
        pattern: Pattern
        tone: Tone
      }
    }
    quiz: {
      younger: {
        questions: Array<{
          id: number
          question: string
          options: string[]
          correct_answer: string
          host_reactions: {
            correct: string
            incorrect: string
          }
        }>
      }
      older: {
        questions: Array<{
          id: number
          question: string
          options: string[]
          correct_answer: string
          host_reactions: {
            correct: string
            incorrect: string
          }
        }>
      }
    }
    results: {
      title: string
      messages: {
        perfect: string
        great: string
        good: string
        needsPractice: string
      }
      buttons: {
        tryAgain: string
        home: string
      }
    }
  }
}

export const createChapterConfig = (config: ChapterConfig): ChapterConfig => {
  // Validate the config
  validateChapterConfig(config)
  return config
}

const validateChapterConfig = (config: ChapterConfig) => {
  // Basic validation
  if (!config.id) throw new Error('Chapter ID is required')
  if (!config.title) throw new Error('Chapter title is required')
  if (!config.subtitle) throw new Error('Chapter subtitle is required')
  if (!config.readStoryLink) throw new Error('Read story link is required')
  if (!config.quizLink) throw new Error('Quiz link is required')

  // Validate questions
  const youngerQuestions = config.screens.quiz.younger.questions
  const olderQuestions = config.screens.quiz.older.questions

  if (!youngerQuestions || youngerQuestions.length === 0) {
    throw new Error('Younger age group questions are required')
  }

  if (!olderQuestions || olderQuestions.length === 0) {
    throw new Error('Older age group questions are required')
  }

  // Validate question structure
  const validateQuestions = (questions: any[]) => {
    questions.forEach((q, index) => {
      if (!q.id) throw new Error(`Question ${index + 1} is missing an ID`)
      if (!q.question) throw new Error(`Question ${index + 1} is missing a question`)
      if (!q.options || q.options.length !== 4) throw new Error(`Question ${index + 1} must have exactly 4 options`)
      if (!q.correct_answer) throw new Error(`Question ${index + 1} is missing a correct answer`)
      if (!q.host_reactions?.correct || !q.host_reactions?.incorrect) {
        throw new Error(`Question ${index + 1} is missing host reactions`)
      }
    })
  }

  validateQuestions(youngerQuestions)
  validateQuestions(olderQuestions)
}

export const defaultTheme = {
  pattern: 'paper' as Pattern,
  tone: 'warm' as Tone
}

export const defaultHostReactions = {
  correct: [
    "Purrfectly calculated!",
    "Almost as smart as a cat!",
    "You've earned a royal head bump!",
    "My whiskers are tingling with approval!",
    "Not bad for a two-legged creature!"
  ],
  incorrect: [
    "Try again!",
    "Even a sleeping cat counts better!",
    "Did you count on your toes?",
    "Is that your final answer?",
    "My litterbox math is better than that!"
  ]
} 