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
    question: "purr purr Hudson has $60. His mom gives him $5 for cleaning his room. How much money does he have now?",
    options: ["$60", "$65", "$70", "$75"],
    answer: "$65"
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
    question: "meow meow Hudson got paid $5 for walking Drew-boo. If he walks Drew-boo again, how much more money will he get?",
    options: ["$5", "$10", "$15", "$20"],
    answer: "$5"
  },
  {
    question: "Meow-ch! Hudson bought bandaids for $10. Then he bought earplugs. The earplugs cost $5. How much did he spend?",
    options: ["$10", "$12", "$15", "$20"],
    answer: "$15"
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
    question: "How much did Hudson make from feeding Joseph for four days?",
    options: ["$5", "$10", "$15", "$20"],
    answer: "$20"
  },
  {
    question: "purr Hudson bought a scoop for $30 and bandaids for $10. How much did they cost together?",
    options: ["$35", "$40", "$45", "$50"],
    answer: "$40"
  },
  {
    question: "Hudson made: $25 walking Drew-boo and Edie, $60 feeding pets (Joseph and Johnny), $40 watching Mr. Fluffbutt. How much did Hudson make in total?",
    options: ["Potato", "$100", "$105", "$110"],
    answer: "$105"
  },
  {
    question: "purr purr Mr. Fluffbutt wants to check Hudson's shopping list! Let's count with our paws: Cat Care Kit (bandaids, ear plugs, cream, and scoop): $65, Big Adventure Backpack: $50. How much did Hudson spend on ALL his pet supplies?",
    options: ["$105", "$115", "$125", "$135"],
    answer: "$115"
  },
  {
    question: "yawn Hudson started with $60 and lost $10. How much does he have now?",
    options: ["$40", "$50", "$60", "$70"],
    answer: "$50"
  }
]

export default function Quiz4Ages4To5() {
  return (
    <QuizTemplate
      questions={questions}
      chapterNumber="4"
      quizType="easy"
    />
  )
} 