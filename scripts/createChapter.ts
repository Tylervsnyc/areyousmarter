import { ChapterConfig, createChapterConfig, defaultTheme, defaultHostReactions } from '../app/data/chapterTemplate'
import fs from 'fs'
import path from 'path'

interface ChapterInput {
  chapterNumber: number
  title: string
  subtitle: string
  readStoryLink: string
  youngerQuestions: Array<{
    question: string
    options: string[]
    correct_answer: string
    host_reactions?: {
      correct: string
      incorrect: string
    }
  }>
  olderQuestions: Array<{
    question: string
    options: string[]
    correct_answer: string
    host_reactions?: {
      correct: string
      incorrect: string
    }
  }>
}

const generateChapterConfig = (input: ChapterInput): ChapterConfig => {
  const { chapterNumber, title, subtitle, readStoryLink, youngerQuestions, olderQuestions } = input

  // Process questions to ensure they have host reactions
  const processQuestions = (questions: typeof youngerQuestions) => {
    return questions.map((q, index) => ({
      id: index + 1,
      question: q.question,
      options: q.options,
      correct_answer: q.correct_answer,
      host_reactions: q.host_reactions || {
        correct: defaultHostReactions.correct[index % defaultHostReactions.correct.length],
        incorrect: defaultHostReactions.incorrect[index % defaultHostReactions.incorrect.length]
      }
    }))
  }

  return createChapterConfig({
    id: chapterNumber.toString(),
    title,
    subtitle,
    readStoryLink,
    quizLink: `/quiz/${chapterNumber}`,
    metadata: {
      host: {
        name: "Mr. Fluffbutt",
        type: "cat",
        traits: ["sassy", "mathematical", "royal"],
        description: "A distinguished feline mathematician with a penchant for sass"
      },
      financial_tracker: {
        bike_goal: 500,
        starting_balance: 0,
        money_earned: 0,
        current_balance: 0,
        remaining_goal: 500
      },
      theme: defaultTheme
    },
    screens: {
      intro: {
        title,
        subtitle,
        opening_greeting: "Welcome to my mathematical domain!",
        description: "Let's see if you're worthy of my mathematical wisdom.",
        progress_message: "Hudson's bike fund is growing... slowly.",
        host_image: "/images/mrfb.jpg",
        button_text: "Begin Challenge"
      },
      name_selection: {
        title: "Your Name, Challenger!",
        greeting: "Who dares to test their mathematical prowess?",
        button_text: "Continue",
        theme: defaultTheme
      },
      age_selection: {
        title: "Reveal Your Years of Wisdom!",
        greeting: "And how many years have you been roaming this Earth? Do try to be honest.",
        age_responses: {
          "6-7": "Ah, a young kitten still. We'll start with the easy numbers.",
          "8-9": "Getting close to double digits? Let's see if your math skills match your age.",
          baby: "Too young! Come back when you've learned to count past your whiskers!",
          ship: "Oh my, practically ancient for a human! But still no match for feline wisdom."
        },
        sassy_responses: [
          "Oh my whiskers! Are you trying to be funny?",
          "*sigh* I see we have a jester in my mathematical court."
        ],
        final_warning: "Enough games! Choose your true age now!",
        age_groups: {
          younger: "6-7 years of mathematical experience",
          older: "8-9 years of numerical wisdom",
          goof_options: {
            baby: "I'm just a tiny kitten",
            ship: "I'm as old as Mr. Fluffbutt's royal lineage"
          }
        },
        theme: defaultTheme
      },
      quiz: {
        younger: {
          questions: processQuestions(youngerQuestions)
        },
        older: {
          questions: processQuestions(olderQuestions)
        }
      },
      results: {
        title: "Quiz Results",
        messages: {
          perfect: "PURR-FECT SCORE! You're almost as smart as me... almost!",
          great: "Look at you go! Just a whisker away from perfect!",
          good: "Not bad! But I know you can do even better!",
          needsPractice: "Oops! Let's sharpen those counting skills and try again!"
        },
        buttons: {
          tryAgain: "Try Again",
          home: "Return Home"
        }
      }
    }
  })
}

const writeChapterToFile = (config: ChapterConfig) => {
  const filePath = path.join(process.cwd(), 'app', 'data', `chapter${config.id}.json`)
  fs.writeFileSync(filePath, JSON.stringify(config, null, 2))
  console.log(`Created chapter ${config.id} at ${filePath}`)
}

// Example usage:
/*
const chapterInput: ChapterInput = {
  chapterNumber: 4,
  title: "Are You Smarter Than Mr. Fluffbutt?",
  subtitle: "Chapter 4: The Worst Week EVER!",
  readStoryLink: "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-4",
  youngerQuestions: [
    {
      question: "How much money did Hudson start with?",
      options: ["$0", "$5", "$10", "$15"],
      correct_answer: "$0"
    }
    // ... more questions
  ],
  olderQuestions: [
    {
      question: "If Hudson starts with $0 and needs $500, what percentage of his goal does he have?",
      options: ["0%", "1%", "2%", "5%"],
      correct_answer: "0%"
    }
    // ... more questions
  ]
}

const config = generateChapterConfig(chapterInput)
writeChapterToFile(config)
*/

export { generateChapterConfig, writeChapterToFile }
export type { ChapterInput } 