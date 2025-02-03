'use client'

import { useState } from 'react'
import MagicProgressBar from '@/components/MagicProgressBar'

export default function ProgressTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const totalQuestions = 10

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        <h1 className="text-2xl font-bold text-center text-purple-900">
          Magic Progress Bar Test
        </h1>

        <MagicProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
        />

        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 1}
            className="px-6 py-2 bg-purple-500 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === totalQuestions}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
} 