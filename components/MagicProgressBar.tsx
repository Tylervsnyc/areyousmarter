'use client'

interface MagicProgressBarProps {
  currentQuestion: number
  totalQuestions: number
}

export default function MagicProgressBar({ currentQuestion, totalQuestions }: MagicProgressBarProps) {
  // Calculate stops for each question (percentage where each number sits)
  const getQuestionStop = (questionNumber: number) => {
    // If it's the last question, fill completely
    if (questionNumber === totalQuestions) return 100
    
    // Otherwise, calculate stops with first number at 10%
    const gap = 80 / (totalQuestions - 1) // 80% divided by gaps between numbers
    return 10 + (questionNumber - 1) * gap // Start at 10%, increment by gap
  }

  // Get the progress width based on current question
  const progress = getQuestionStop(currentQuestion)
  const isFinalQuestion = currentQuestion === totalQuestions

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-3">
        {/* Question Numbers */}
        <div className="flex justify-between items-center px-4 mb-2">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`text-sm font-bold transition-all duration-300 ${
                i + 1 < currentQuestion
                  ? 'text-purple-600 scale-110'
                  : i + 1 === currentQuestion
                  ? 'text-yellow-500 scale-125'
                  : 'text-gray-400'
              }`}
              style={{
                width: '20px',
                textAlign: 'center'
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Progress Container */}
        <div className={`relative h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] ${
          isFinalQuestion ? 'animate-glow' : ''
        }`}>
          {/* 3D Tube Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          
          {/* Magical Liquid */}
          <div
            className="absolute h-full bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          >
            {/* Bubbling Effect */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/60 animate-bubble"
                  style={{
                    left: `${Math.random() * 100}%`,
                    width: `${4 + Math.random() * 8}px`,
                    height: `${4 + Math.random() * 8}px`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes bubble {
          0% {
            transform: translateY(48px) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-8px) scale(1);
            opacity: 0;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px #ffd700,
                      0 0 10px #ffd700,
                      0 0 15px #ffd700;
          }
          50% {
            box-shadow: 0 0 10px #ffd700,
                      0 0 20px #ffd700,
                      0 0 30px #ffd700;
          }
        }
        
        .animate-bubble {
          animation: bubble 2s ease-in infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
} 