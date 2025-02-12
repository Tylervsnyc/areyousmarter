'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface MatchingPair {
  id: number
  leftText: string
  rightText: string
}

interface MatchingQuestionProps {
  pairs: MatchingPair[]
  onAnswer: (isCorrect: boolean) => void
  isAnswered: boolean
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function MatchingQuestion({ pairs, onAnswer, isAnswered }: MatchingQuestionProps) {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null)
  const [selectedRight, setSelectedRight] = useState<number | null>(null)
  const [matchedPairs, setMatchedPairs] = useState<number[]>([])
  const [isIncorrect, setIsIncorrect] = useState(false)
  const [correctSound, setCorrectSound] = useState<HTMLAudioElement | null>(null)
  const [incorrectSound, setIncorrectSound] = useState<HTMLAudioElement | null>(null)
  
  // Create randomized arrays for both columns while preserving matching pairs
  const [randomizedLeftPairs] = useState(() => shuffleArray([...pairs]))
  const [randomizedRightPairs] = useState(() => shuffleArray([...pairs]))

  useEffect(() => {
    setCorrectSound(new Audio('/sounds/matchcorrect.wav'))
    setIncorrectSound(new Audio('/sounds/matchincorrect.wav'))
  }, [])

  useEffect(() => {
    // Check if all pairs are matched correctly
    if (matchedPairs.length === pairs.length) {
      onAnswer(true)
    }
  }, [matchedPairs, pairs.length, onAnswer])

  const handleLeftSelect = (id: number) => {
    if (matchedPairs.includes(id) || isAnswered) return
    setSelectedLeft(id)
    checkMatch(id, selectedRight)
  }

  const handleRightSelect = (id: number) => {
    if (matchedPairs.includes(id) || isAnswered) return
    setSelectedRight(id)
    checkMatch(selectedLeft, id)
  }

  const checkMatch = (left: number | null, right: number | null) => {
    if (left === null || right === null) return

    if (left === right) {
      // Only play sound if it's not the final match
      if (matchedPairs.length < pairs.length - 1) {
        correctSound?.play()
      }
      setMatchedPairs([...matchedPairs, left])
      setSelectedLeft(null)
      setSelectedRight(null)
    } else {
      // Incorrect match
      incorrectSound?.play()
      setIsIncorrect(true)
      setTimeout(() => {
        setIsIncorrect(false)
        setSelectedLeft(null)
        setSelectedRight(null)
      }, 1000)
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white/90 rounded-xl border-4 border-yellow-400 p-4 shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center title-text">
        Match or MEOW!
      </h2>
      
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {randomizedLeftPairs.map((pair) => {
            const isMatched = matchedPairs.includes(pair.id);
            const isSelected = selectedLeft === pair.id;
            const isWrong = isIncorrect && isSelected;
            
            return (
              <motion.button
                key={`left-${pair.id}`}
                onClick={() => handleLeftSelect(pair.id)}
                disabled={isMatched || isAnswered}
                className={`
                  w-full h-16 sm:h-20 p-2 sm:p-3 rounded-xl border-2 
                  flex items-center justify-center text-center text-sm sm:text-base font-semibold
                  transition-all duration-200 button-3d
                  ${isMatched 
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-default'
                    : isWrong
                      ? 'bg-yellow-500 text-white border-yellow-600'
                      : isSelected
                        ? 'bg-blue-500 text-white border-blue-600 blue-3d'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }
                `}
                whileTap={{ scale: isMatched ? 1 : 0.98 }}
              >
                {pair.leftText}
              </motion.button>
            );
          })}
        </div>
        
        {/* Right Column */}
        <div className="space-y-4">
          {randomizedRightPairs.map((pair) => {
            const isMatched = matchedPairs.includes(pair.id);
            const isSelected = selectedRight === pair.id;
            const isWrong = isIncorrect && isSelected;
            
            return (
              <motion.button
                key={`right-${pair.id}`}
                onClick={() => handleRightSelect(pair.id)}
                disabled={isMatched || isAnswered}
                className={`
                  w-full h-16 sm:h-20 p-2 sm:p-3 rounded-xl border-2 
                  flex items-center justify-center text-center text-sm sm:text-base font-semibold
                  transition-all duration-200 button-3d
                  ${isMatched 
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-default'
                    : isWrong
                      ? 'bg-yellow-500 text-white border-yellow-600'
                      : isSelected
                        ? 'bg-blue-500 text-white border-blue-600 blue-3d'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }
                `}
                whileTap={{ scale: isMatched ? 1 : 0.98 }}
              >
                {pair.rightText}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  )
} 