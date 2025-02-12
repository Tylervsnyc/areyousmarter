'use client'

import { useState } from 'react'
import { DuoTemplateButton } from '../buttons/page'
import { MultipleChoiceQuestion } from '../types'
import { getRandomQuip, playSound } from '../types'

interface MultipleChoiceQuestionProps {
  question: MultipleChoiceQuestion
  onAnswer: (isCorrect: boolean) => void
}

export default function MultipleChoiceQuestionComponent({
  question,
  onAnswer
}: MultipleChoiceQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return // Prevent multiple answers
    
    setSelectedAnswer(answer)
    const isCorrect = answer === question.correctAnswer
    
    // Play sound and show feedback
    playSound(isCorrect)
    onAnswer(isCorrect)
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto px-4">
      {question.options.map((option, index) => (
        <DuoTemplateButton
          key={index}
          variant={
            selectedAnswer === option
              ? option === question.correctAnswer
                ? 'green'
                : 'pink'
              : 'blue'
          }
          onClick={() => handleAnswer(option)}
          disabled={!!selectedAnswer}
        >
          {option}
        </DuoTemplateButton>
      ))}
    </div>
  )
} 