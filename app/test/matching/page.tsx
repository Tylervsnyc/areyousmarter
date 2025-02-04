'use client'

import MatchingQuizTemplate from '../../../components/MatchingQuizTemplate'

const pairs = [
  {
    id: 1,
    leftText: "Flyer cost",
    rightText: "$3"
  },
  {
    id: 2,
    leftText: "Cat-sitting pay",
    rightText: "$10"
  },
  {
    id: 3,
    leftText: "Ant farm pay",
    rightText: "$5"
  },
  {
    id: 4,
    leftText: "Days with cat",
    rightText: "5 days"
  }
]

export default function TestMatchingQuiz() {
  return (
    <MatchingQuizTemplate
      pairs={pairs}
      chapterNumber="test"
      quizType="matching"
    />
  )
} 