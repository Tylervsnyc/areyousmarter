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
  { id: 'goldfish', name: 'Goldfish', emoji: '🐠', isCorrectlySafe: true },
  { id: 'trex', name: 'T Rex', emoji: '🦖', isCorrectlySafe: false },
  { id: 'mouse', name: 'Mouse', emoji: '🐭', isCorrectlySafe: true },
  { id: 'wolf', name: 'Wolf', emoji: '🐺', isCorrectlySafe: false },
  { id: 'crocodile', name: 'Crocodile', emoji: '🐊', isCorrectlySafe: false },
  { id: 'hamster', name: 'Hamster', emoji: '🐹', isCorrectlySafe: true }
]

const questions = [
  {
    question: "purr Hudson has $60. He earns $25 from mowing lawns and $15 from cleaning windows. What's his new total?",
    options: ["$90", "$100", "$105", "$110"],
    answer: "$100"
  },
  {
    question: "Hisssss! Let's sort these animals into safe ones and scary ones!",
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
    question: "paws at calculator Calculate Hudson's daily earnings: Dog walking service ($5 × 3 walks): $15, Cat feeding ($20 × 2 cats): $40, Dog walking (Edie): $20, Pet sitting (Mr. Fluffbutt): $30. What's the total?",
    options: ["$100", "$105", "$110", "$115"],
    answer: "$105"
  },
  {
    question: "whiskers twitching Let's review Hudson's expenses: First Aid Kit (bandaids + cream): $30, Safety Equipment (ear plugs): $5, Pet Care Tools (scoop): $30, Professional Backpack: $50. What's the total cost?",
    options: ["$105", "$115", "$120", "$125"],
    answer: "$115"
  },
  {
    question: "tail swishing Time for our weekly calculation: Pet care earnings: $105, Supply expenses: $115, Extra treats bought: $0. Did Hudson's business make or lose money?",
    options: ["Made money", "Lost money", "Broke even", "Need more info"],
    answer: "Lost money"
  },
  {
    question: "meow meow Final money check: Started with: $60, Lost this week: $10, Extra allowance: $0, Birthday money: $0. What's Hudson's final amount?",
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