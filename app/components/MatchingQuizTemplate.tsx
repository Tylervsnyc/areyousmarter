'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface MatchingPair {
  id: number
  leftText: string
  rightText: string
}

interface MatchingQuizTemplateProps {
  pairs: MatchingPair[]
  chapterNumber: string
  quizType: string
}

export default function MatchingQuizTemplate({ pairs, chapterNumber, quizType }: MatchingQuizTemplateProps) {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null)
  const [selectedRight, setSelectedRight] = useState<number | null>(null)
  const [matchedPairs, setMatchedPairs] = useState<number[]>([])
  const [isIncorrect, setIsIncorrect] = useState(false)
  const [correctSound, setCorrectSound] = useState<HTMLAudioElement | null>(null)
  const [incorrectSound, setIncorrectSound] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    setCorrectSound(new Audio('/sounds/matchcorrect.wav'))
    setIncorrectSound(new Audio('/sounds/matchincorrect.wav'))
  }, [])

  const handleLeftSelect = (id: number) => {
    if (matchedPairs.includes(id)) return
    setSelectedLeft(id)
    checkMatch(id, selectedRight)
  }

  const handleRightSelect = (id: number) => {
    if (matchedPairs.includes(id)) return
    setSelectedRight(id)
    checkMatch(selectedLeft, id)
  }

  const checkMatch = (left: number | null, right: number | null) => {
    if (left === null || right === null) return

    if (left === right) {
      // Correct match
      correctSound?.play()
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

  const getCellStyle = (id: number, isLeft: boolean) => {
    const isSelected = isLeft ? selectedLeft === id : selectedRight === id
    const isMatched = matchedPairs.includes(id)
    
    if (isMatched) {
      return "bg-gray-100 text-gray-400 border-gray-200"
    }
    if (isSelected && isIncorrect) {
      return "bg-red-100 text-red-500 border-red-300"
    }
    if (isSelected) {
      return "bg-blue-100 text-blue-500 border-blue-300"
    }
    return "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
  }

  return (
    <div className="min-h-screen bg-[rgb(252,250,245)] p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Tap the matching pairs
      </h1>
      
      <div className="max-w-2xl mx-auto grid grid-cols-2 gap-6">
        <div className="space-y-4">
          {pairs.map((pair) => (
            <motion.button
              key={`left-${pair.id}`}
              onClick={() => handleLeftSelect(pair.id)}
              className={`w-full p-4 rounded-xl border-2 transition-colors duration-200 ${getCellStyle(pair.id, true)}`}
              whileTap={{ scale: 0.98 }}
            >
              {pair.leftText}
            </motion.button>
          ))}
        </div>
        
        <div className="space-y-4">
          {pairs.map((pair) => (
            <motion.button
              key={`right-${pair.id}`}
              onClick={() => handleRightSelect(pair.id)}
              className={`w-full p-4 rounded-xl border-2 transition-colors duration-200 ${getCellStyle(pair.id, false)}`}
              whileTap={{ scale: 0.98 }}
            >
              {pair.rightText}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
} 