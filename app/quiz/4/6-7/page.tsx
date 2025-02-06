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
    question: "purr Hudson has $60. If his grandma gives him $15 for helping in her garden, how much does he have now?",
    options: ["$70", "$75", "$80", "$85"],
    answer: "$75"
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
    question: "How much did Hudson make from watching all the pets on Tuesday?",
    options: ["$20", "$25", "$30", "$35"],
    answer: "$25"
  },
  {
    question: "If Hudson's scoop cost $30 and his bandaids cost $10, what's the total cost?",
    options: ["$35", "$40", "$45", "$50"],
    answer: "$40"
  },
  {
    question: "Let's add up Hudson's earnings: Dog walking ($5), Feeding Joseph ($20), Feeding Johnny ($20), Walking Edie ($20), Pet sitting Mr. Fluffbutt ($40). What's the total amount Hudson earned?",
    options: ["$95", "$100", "$105", "$110"],
    answer: "$105"
  },
  {
    question: "meow meow Joseph and Johnny are curious about Hudson's shopping spree! Let's count his purchases: First Aid Kit (bandaids and cream): $30, Pet Care Tools (ear plugs and scoop): $35, Adventure backpack: $50. What's the total of Hudson's pet care shopping?",
    options: ["$105", "$115", "$125", "$135"],
    answer: "$115"
  },
  {
    question: "Hudson had $60, earned $105, and spent $115. What's left?",
    options: ["$40", "$50", "$60", "$70"],
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