'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'

const matchingPairs = [
  {
    id: 1,
    leftText: "Bike color",
    rightText: "Red"
  },
  {
    id: 2,
    leftText: "Hudson's age",
    rightText: "Nine"
  },
  {
    id: 3,
    leftText: "Cat's name",
    rightText: "Mr. Fluffbutt"
  },
  {
    id: 4,
    leftText: "Time with cat",
    rightText: "1 hour"
  }
]

const sampleQuestions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
    explanation: "Two plus two equals four!"
  },
  {
    question: "What is 5 - 3?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "Five minus three equals two!"
  },
  {
    question: "What is 3 × 3?",
    options: ["6", "7", "8", "9"],
    answer: "9",
    explanation: "Three times three equals nine!"
  },
  {
    question: "How much money does Hudson have at the beginning?",
    options: ["$5", "$10", "$15", "$20"],
    answer: "$10",
    explanation: "Hudson starts with $10!"
  },
  {
    question: "",
    type: "matching" as const,
    hideQuestionBox: true,
    component: MatchingQuestion,
    componentProps: {
      pairs: matchingPairs
    },
    explanation: "Great job matching all the facts!"
  }
]

export default function QuizPreview() {
  return (
    <QuizTemplate
      questions={sampleQuestions}
      chapterNumber="test"
      quizType="easy"
    />
  )
} 