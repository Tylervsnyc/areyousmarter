'use client'

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuizProgress({ currentQuestion, totalQuestions }: QuizProgressProps) {
  const progress = (currentQuestion / totalQuestions) * 100

  return (
    <div className="w-full mb-8">
      {/* Progress Container */}
      <div className="relative h-8 bg-gray-200 rounded-lg overflow-hidden transform rotate-[-4deg] shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        {/* 3D Effect Bottom Layer */}
        <div className="absolute inset-0 bg-gray-300 transform translate-y-[2px]" />
        
        {/* Progress Bar */}
        <div 
          className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-30" />
          <div className="absolute right-0 h-full w-8 bg-gradient-to-r from-blue-600 to-white opacity-50 blur-sm" />
        </div>

        {/* Question Counter */}
        <div className="absolute inset-0 flex items-center justify-center transform rotate-[4deg]">
          <span className="text-sm font-bold text-gray-700">
            Question {currentQuestion} of {totalQuestions}
          </span>
        </div>
      </div>

      {/* Progress Markers */}
      <div className="flex justify-between px-2 mt-2">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <div 
            key={index}
            className={`w-3 h-3 rounded-full transform translate-y-[-4px] ${
              index < currentQuestion 
                ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' 
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
} 