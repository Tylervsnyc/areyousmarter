'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import DuoHeader from '../../components/DuoHeader'
import FeedbackPopup from '../../components/FeedbackPopup'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MatchingQuestion from '../../components/MatchingQuestion'
import SortingQuizTest from '../../sorting/page'
import { duoFontStyles, duoDefaultTheme } from '../../styles'
import { questions } from '../../questions'
import { getRandomQuip } from '../../types'
import { handleQuestionNavigation, getCurrentQuestionData } from '../../utils/navigation'

export default function QuestionPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { currentQuestion, score, name } = getCurrentQuestionData(searchParams)
  
  const [feedback, setFeedback] = useState({
    show: false,
    isCorrect: false,
    message: '',
    explanation: ''
  })

  const questionId = parseInt(params.id)
  const question = questions.find(q => q.id === questionId)

  if (!question) {
    router.push('/test/duo-template')
    return null
  }

  const handleAnswer = (isCorrect: boolean) => {
    setFeedback({
      show: true,
      isCorrect,
      message: getRandomQuip(isCorrect),
      explanation: question.explanation || ''
    })
  }

  const handleTryAgain = () => {
    setFeedback(prev => ({ ...prev, show: false }))
  }

  const handleContinue = () => {
    handleQuestionNavigation(
      { currentQuestion: questionId, totalQuestions: questions.length, score, name },
      feedback.isCorrect,
      router
    )
  }

  const renderQuestion = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <MultipleChoiceQuestion
            question={question}
            onAnswer={handleAnswer}
          />
        )
      case 'matching':
        return (
          <MatchingQuestion
            question={question}
            onAnswer={handleAnswer}
          />
        )
      case 'sorting':
        return <SortingQuizTest />
      default:
        return null
    }
  }

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{duoFontStyles}</style>

      {/* Header */}
      <DuoHeader />

      {/* Main Content */}
      <div className="flex-1 relative">
        <div className="absolute inset-0" style={{ backgroundColor: duoDefaultTheme.backgroundColor }}>
          <div className="h-full flex flex-col px-4">
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${(questionId / questions.length) * 100}%` }}
                  />
                </div>
                <div className="text-center mt-2 text-gray-600">
                  Question {questionId} of {questions.length}
                </div>
              </div>

              {/* Question Box */}
              <div 
                className="rounded-xl border-4 p-4 sm:p-6 mb-6"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center title-text">
                  {question.question}
                </h1>
              </div>

              {/* Question Content */}
              {renderQuestion()}

              {/* Feedback Popup */}
              <FeedbackPopup
                {...feedback}
                onTryAgain={handleTryAgain}
                onContinue={handleContinue}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 