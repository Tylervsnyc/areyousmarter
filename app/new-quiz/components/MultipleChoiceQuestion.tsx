'use client'

import { Question } from '../types'
import { DuoTemplateButton } from './DuoTemplateButton'

interface MultipleChoiceQuestionProps {
  question: Question
  onAnswer: (answer: string) => void
  isAnswered: boolean
  selectedAnswer?: string
}

const MultipleChoiceQuestion = ({ 
  question, 
  onAnswer, 
  isAnswered,
  selectedAnswer 
}: MultipleChoiceQuestionProps) => {
  const handleAnswer = (answer: string) => {
    if (!isAnswered) {
      onAnswer(answer)
    }
  }

  const getButtonVariant = (option: string) => {
    if (!isAnswered) return 'blue'
    if (option === question.answer) return 'green'
    if (option === selectedAnswer) return 'pink'
    return 'blue'
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        {question.question}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <DuoTemplateButton
            key={index}
            onClick={() => handleAnswer(option)}
            variant={getButtonVariant(option)}
            disabled={isAnswered}
            className="w-full text-left"
          >
            {option}
          </DuoTemplateButton>
        ))}
      </div>
    </div>
  )
}

export default MultipleChoiceQuestion 