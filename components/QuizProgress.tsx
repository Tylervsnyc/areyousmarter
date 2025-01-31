'use client'

interface QuizProgressProps {
  currentQuestion: number
  correctAnswers: number
  totalQuestions: number
  isCorrectAnimation?: boolean
}

export default function QuizProgress({
  currentQuestion,
  correctAnswers,
  totalQuestions,
  isCorrectAnimation = false
}: QuizProgressProps) {
  const questionProgress = (currentQuestion / totalQuestions) * 100
  const correctProgress = (correctAnswers / totalQuestions) * 100

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Question Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium text-gray-700">
          <span>Question {currentQuestion} of {totalQuestions}</span>
          <span>{Math.round(questionProgress)}% Complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ width: `${questionProgress}%` }}
          />
        </div>
      </div>

      {/* Correct Answers Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium text-gray-700">
          <span>Correct Answers</span>
          <span>{correctAnswers} of {totalQuestions}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ease-out ${
              isCorrectAnimation ? 'bg-green-500' : 'bg-yellow-400'
            }`}
            style={{ width: `${correctProgress}%` }}
          />
        </div>
      </div>
    </div>
  )
} 