'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'
import SortingQuestion from '@/components/SortingQuestion'

const matchingPairs = [
  {
    id: 1,
    leftText: "Squirrel!",
    rightText: "Drew-boo"
  },
  {
    id: 2,
    leftText: "Loud noise!",
    rightText: "Joseph"
  },
  {
    id: 3,
    leftText: "Small pup",
    rightText: "Edie"
  },
  {
    id: 4,
    leftText: "Best Animal",
    rightText: "Fluffbutt"
  }
]

const safeAnimals = [
  { id: 'trex', name: 'T Rex', emoji: '🦖', isCorrectlySafe: false },
  { id: 'mouse', name: 'Mouse', emoji: '🐭', isCorrectlySafe: true },
  { id: 'crocodile', name: 'Crocodile', emoji: '🐊', isCorrectlySafe: false },
  { id: 'goldfish', name: 'Goldfish', emoji: '🐠', isCorrectlySafe: true },
  { id: 'hamster', name: 'Hamster', emoji: '🐹', isCorrectlySafe: true },
  { id: 'wolf', name: 'Wolf', emoji: '🐺', isCorrectlySafe: false }
]

const questions = [
  {
    question: "purr Hudson has $60. He earns $25 from mowing lawns and $15 from cleaning windows. What's his new total?",
    options: ["$90", "$100", "$105", "$110"],
    answer: "$100"
  },
  {
    question: "Hisssss! Sort these animals!",
    type: "sorting" as const,
    hideQuestionBox: true,
    component: SortingQuestion,
    componentProps: {
      animals: safeAnimals
    }
  },
  {
    question: "If Hudson makes $5 per walk and walks 3 dogs twice each, how much will he make?",
    options: ["$20", "$25", "$30", "$35"],
    answer: "$30"
  },
  {
    question: "Hudson bought a $30 scoop, $20 cream, and $10 bandaids. Total spent?",
    options: ["$50", "$60", "$65", "$70"],
    answer: "$60"
  },
  {
    question: "whiskers twitching Time to match!",
    type: "matching" as const,
    hideQuestionBox: true,
    component: MatchingQuestion,
    componentProps: {
      pairs: matchingPairs
    }
  },
  {
    question: "How much did Hudson make from all his Tuesday pet visits?",
    options: ["$25", "$30", "$35", "$40"],
    answer: "$25"
  },
  {
    question: "Hudson bought a scoop with an extendable arm ($30) and bandaids ($10). Calculate their combined cost.",
    options: ["$35", "$40", "$45", "$50"],
    answer: "$40"
  },
  {
    question: "Calculate Hudson's total revenue: Dog walking service: $5, Cat feeding (Joseph): $20 (4 visits), Cat feeding (Johnny): $20 (4 visits), Dog walking (Edie): $20 (4 walks), Pet sitting (Mr. Fluffbutt): $40 (4 visits). What's Hudson's total revenue?",
    options: ["$95", "$100", "$105", "$110"],
    answer: "$105"
  },
  {
    question: "paws at calculator Mr. Fluffbutt, our feline financial advisor, needs to audit Hudson's expenses! Let's review: First Aid Supplies (bandaids and cream): $30, Safety Equipment (ear plugs): $5, Deluxe Extended Litterbox Scoop: $30, Professional Pet Sitter Backpack: $50. What's the grand total of Hudson's pet care investments?",
    options: ["$105", "$115", "$125", "$135"],
    answer: "$115"
  },
  {
    question: "If Hudson started with $60, made $105, and spent $115, what's his final amount?",
    options: ["$40", "$50", "$60", "$70"],
    answer: "$50"
  }
]

export default function Quiz4Ages8To9() {
  return (
    <QuizTemplate
      questions={questions}
      chapterNumber="4"
      quizType="hard"
    />
  )
} 