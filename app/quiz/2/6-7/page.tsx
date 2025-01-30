'use client'

import QuizTemplate from '@/components/QuizTemplate'
import { chapter2EasyQuiz } from '@/data/chapter2Quizzes'

export default function Chapter2EasyQuiz() {
  return (
    <QuizTemplate
      questions={chapter2EasyQuiz.questions}
      chapterNumber="2"
      quizType="easy"
    />
  )
} 