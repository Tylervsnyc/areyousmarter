'use client'

import QuizTemplate from '@/components/QuizTemplate'
import { chapter2HardQuiz } from '@/data/chapter2Quizzes'

export default function Chapter2HardQuiz() {
  return (
    <QuizTemplate
      questions={chapter2HardQuiz.questions}
      chapterNumber="2"
      quizType="hard"
    />
  )
} 