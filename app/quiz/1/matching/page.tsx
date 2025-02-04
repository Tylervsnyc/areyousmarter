'use client'

import MatchingQuizTemplate from '../../../../components/MatchingQuizTemplate'

const pairs = [
  {
    id: 1,
    leftText: "Cost of flyers",
    rightText: "$3"
  },
  {
    id: 2,
    leftText: "Daily payment for cat-sitting Mr. Fluffbutt",
    rightText: "$10"
  },
  {
    id: 3,
    leftText: "Daily payment for ant farm sitting",
    rightText: "$5"
  },
  {
    id: 4,
    leftText: "Total days with Mr. Fluffbutt",
    rightText: "5 days"
  }
]

export default function MatchingQuiz() {
  return (
    <MatchingQuizTemplate
      pairs={pairs}
      chapterNumber="1"
      quizType="matching"
    />
  )
} 