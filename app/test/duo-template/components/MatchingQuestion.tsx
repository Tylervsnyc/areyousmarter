'use client'

import { useState } from 'react'
import { DuoTemplateButton } from '../buttons/page'
import { MatchingQuestion } from '../types'
import { getRandomQuip, playSound } from '../types'

interface MatchingQuestionProps {
  question: MatchingQuestion
  onAnswer: (isCorrect: boolean) => void
}

export default function MatchingQuestionComponent({
  question,
  onAnswer
}: MatchingQuestionProps) {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null)
  const [selectedRight, setSelectedRight] = useState<number | null>(null)
  const [matches, setMatches] = useState<{ left: number; right: number }[]>([])
  const [hasError, setHasError] = useState(false)

  const handleLeftSelect = (id: number) => {
    if (selectedRight !== null) {
      // Check if match is correct
      const isCorrect = question.pairs.find(p => p.id === id)?.rightText === 
        question.pairs.find(p => p.id === selectedRight)?.rightText

      if (isCorrect) {
        setMatches(prev => [...prev, { left: id, right: selectedRight }])
        
        // Check if all pairs are matched
        if (matches.length + 1 === question.pairs.length) {
          playSound(true)
          onAnswer(true)
        } else {
          playSound(true)
        }
      } else {
        setHasError(true)
        playSound(false)
        onAnswer(false)
      }

      setSelectedLeft(null)
      setSelectedRight(null)
    } else {
      setSelectedLeft(id)
    }
  }

  const handleRightSelect = (id: number) => {
    if (selectedLeft !== null) {
      // Check if match is correct
      const isCorrect = question.pairs.find(p => p.id === selectedLeft)?.rightText === 
        question.pairs.find(p => p.id === id)?.rightText

      if (isCorrect) {
        setMatches(prev => [...prev, { left: selectedLeft, right: id }])
        
        // Check if all pairs are matched
        if (matches.length + 1 === question.pairs.length) {
          playSound(true)
          onAnswer(true)
        } else {
          playSound(true)
        }
      } else {
        setHasError(true)
        playSound(false)
        onAnswer(false)
      }

      setSelectedLeft(null)
      setSelectedRight(null)
    } else {
      setSelectedRight(id)
    }
  }

  const isMatched = (id: number) => {
    return matches.some(m => m.left === id || m.right === id)
  }

  return (
    <div className="flex justify-between gap-8 w-full max-w-2xl mx-auto px-4">
      {/* Left Column */}
      <div className="flex-1 flex flex-col gap-4">
        {question.pairs.map(pair => (
          <DuoTemplateButton
            key={pair.id}
            variant={
              isMatched(pair.id)
                ? 'green'
                : selectedLeft === pair.id
                ? 'yellow'
                : 'blue'
            }
            onClick={() => !isMatched(pair.id) && handleLeftSelect(pair.id)}
            disabled={isMatched(pair.id)}
          >
            {pair.leftText}
          </DuoTemplateButton>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col gap-4">
        {question.pairs.map(pair => (
          <DuoTemplateButton
            key={pair.id}
            variant={
              isMatched(pair.id)
                ? 'green'
                : selectedRight === pair.id
                ? 'yellow'
                : 'blue'
            }
            onClick={() => !isMatched(pair.id) && handleRightSelect(pair.id)}
            disabled={isMatched(pair.id)}
          >
            {pair.rightText}
          </DuoTemplateButton>
        ))}
      </div>
    </div>
  )
} 