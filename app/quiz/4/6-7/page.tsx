'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'
import SortingQuestion from '@/components/SortingQuestion'

const matchingPairs = {
  leftColumn: [
    { id: 1, text: "Squirrel!" },
    { id: 2, text: "Loud noise!" },
    { id: 3, text: "Small pup" },
    { id: 4, text: "Best Animal" }
  ],
  rightColumn: [
    { id: "A", text: "Fluffbutt" },
    { id: "B", text: "Edie" },
    { id: "C", text: "Joseph" },
    { id: "D", text: "Drew-boo" }
  ],
  correctMatches: [
    { left: 1, right: "D" },  // Squirrel! -> Drew-boo
    { left: 2, right: "C" },  // Loud noise! -> Joseph
    { left: 3, right: "B" },  // Small pup -> Edie
    { left: 4, right: "A" }   // Best Animal -> Fluffbutt
  ]
}

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
    question: "purr Hudson has $60. If his grandma gives him $15 for helping in her garden, how much does he have now?",
    options: ["$70", "$75", "$80", "$85"],
    answer: "$75"
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
    question: "Hudson makes $5 for each walk. How much will he make after 3 walks?",
    options: ["$10", "$15", "$20", "$25"],
    answer: "$15"
  },
  {
    question: "Hudson spent $30 on a scoop and then $20 on cream. How much is that together?",
    options: ["$40", "$50", "$55", "$60"],
    answer: "$50"
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
    question: "How much does Hudson make for walking Drew-boo twice?",
    options: ["$5", "$10", "$15", "$20"],
    answer: "$10"
  },
  {
    question: "purr purr Let's count Hudson's pet care money: Walking services: $25, Feeding services: $40, Pet sitting: $40. How much did Hudson make?",
    options: ["$100", "$105", "$110", "$115"],
    answer: "$105"
  },
  {
    question: "meow meow Time to add Hudson's shopping expenses: Pet First Aid Kit: $30, Pet Care Tools: $35, Adventure Backpack: $50. What's the total?",
    options: ["$105", "$115", "$120", "$125"],
    answer: "$115"
  },
  {
    question: "tail swishing Let's check Hudson's money situation from this chapter. Made: $105, Spent: $115. Did Hudson make or lose money?",
    options: ["Made money", "Lost money", "Broke even", "Not sure"],
    answer: "Lost money"
  },
  {
    question: "whiskers twitching Hudson started with $60 and lost $10. How much does he have now?",
    options: ["$40", "$50", "$60", "Potato"],
    answer: "$50"
  }
]

export default function Quiz4Ages6To7() {
  return (
    <QuizTemplate
      questions={questions}
      chapterNumber="4"
      quizType="easy"
    />
  )
} 