'use client'

interface QuizProgressProps {
  currentQuestion: number;
  correctAnswers: number;
  totalQuestions: number;
  isCorrectAnimation?: boolean;
}

export default function QuizProgress({ 
  currentQuestion, 
  correctAnswers,
  totalQuestions,
  isCorrectAnimation 
}: QuizProgressProps) {
  const questionProgress = ((currentQuestion - 1) / totalQuestions) * 100
  const correctProgress = (correctAnswers / totalQuestions) * 100

  return (
    <div className="w-full mb-8" role="region" aria-label="Quiz progress">
      {/* Questions Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Questions Answered</span>
          <span aria-live="polite">{currentQuestion - 1} of {totalQuestions}</span>
        </div>
        <div 
          className="relative h-6 bg-gray-200 rounded-lg overflow-hidden"
          role="progressbar"
          aria-valuenow={questionProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Questions progress"
        >
          <div 
            className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${questionProgress}%` }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-30" />
            <div className="absolute right-0 h-full w-8 bg-gradient-to-r from-blue-600 to-white opacity-50 blur-sm" />
          </div>
        </div>
      </div>

      {/* Correct Answers Progress */}
      <div>
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Correct Answers</span>
          <span aria-live="polite">{correctAnswers} of {totalQuestions}</span>
        </div>
        <div 
          className="relative h-6 bg-gray-200 rounded-lg overflow-hidden"
          role="progressbar"
          aria-valuenow={correctProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Correct answers progress"
        >
          <div 
            className={`absolute h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500 ease-out ${
              isCorrectAnimation ? 'animate-pulse scale-105 shadow-[0_0_20px_rgba(250,204,21,0.5)]' : ''
            }`}
            style={{ width: `${correctProgress}%` }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-30" />
            <div className={`absolute right-0 h-full w-8 bg-gradient-to-r from-yellow-500 to-white opacity-50 blur-sm ${
              isCorrectAnimation ? 'animate-ping' : ''
            }`} />
          </div>
        </div>
      </div>

      {/* Progress Markers */}
      <div 
        className="flex justify-between px-2 mt-4"
        role="list"
        aria-label="Question completion markers"
      >
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <div 
            key={index}
            role="listitem"
            aria-label={`Question ${index + 1} ${
              index < currentQuestion - 1 
                ? index < correctAnswers 
                  ? 'correct' 
                  : 'incorrect'
                : 'not attempted'
            }`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index < currentQuestion - 1
                ? index < correctAnswers 
                  ? `bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)] ${
                      isCorrectAnimation && index === correctAnswers - 1 ? 'scale-150 animate-ping' : ''
                    }` 
                  : 'bg-blue-500'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
} 