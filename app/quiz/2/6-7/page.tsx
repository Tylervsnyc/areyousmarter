'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'

const matchingPairs = [
  {
    id: 1,
    leftText: "Pet count",
    rightText: "Three"
  },
  {
    id: 2,
    leftText: "Flyer cost",
    rightText: "$3"
  },
  {
    id: 3,
    leftText: "Days worked",
    rightText: "Five"
  },
  {
    id: 4,
    leftText: "Ant farm pay",
    rightText: "$15"
  }
]

const questions = [
  // ... first 4 questions stay the same ...
  {
    question: "",
    type: "matching" as const,
    hideQuestionBox: true,
    component: MatchingQuestion,
    componentProps: {
      pairs: matchingPairs
    },
    explanation: "Great job matching all the facts!"
  },
  // ... remaining questions stay the same ...
]

export default function Quiz2Ages6To7() {
  return (
    <QuizTemplate
      questions={questions}
      chapterNumber="2"
      quizType="easy"
    />
  )
} 