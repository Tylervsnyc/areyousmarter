'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'

const matchingPairs = [
  {
    id: 1,
    leftText: "Weekly customers",
    rightText: "Eight kids"
  },
  {
    id: 2,
    leftText: "Cost of posters",
    rightText: "$6"
  },
  {
    id: 3,
    leftText: "Miles walked daily",
    rightText: "2 miles"
  },
  {
    id: 4,
    leftText: "Posters made",
    rightText: "Fifteen"
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

export default function Quiz2Ages8To9() {
  return (
    <QuizTemplate
      questions={questions}
      chapterNumber="2"
      quizType="hard"
    />
  )
} 