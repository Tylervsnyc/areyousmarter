'use client'

import { useState } from 'react'
import chapters from '../data/new-chapters'
import { Question } from '../types'
import { DuoTemplateButton } from '../components/DuoTemplateButton'
import DuoHeader from '../components/DuoHeader'
import { duoDefaultTheme } from '../styles'
import FeedbackPopup from '../components/FeedbackPopup'

const TestQuiz = () => {
  const [ageGroup, setAgeGroup] = useState<'age4to5' | 'age6to7' | 'age8to9'>('age4to5')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const chapter = chapters.chapter1
  const questions = chapter.questions[ageGroup]
  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return
    
    setSelectedAnswer(answer)
    setIsAnswered(true)
    setShowExplanation(true)
    
    if (answer === currentQuestion.answer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setShowExplanation(false)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setShowExplanation(false)
  }

  const handleAgeGroupChange = (newAgeGroup: 'age4to5' | 'age6to7' | 'age8to9') => {
    setAgeGroup(newAgeGroup)
    handleRestart()
  }

  const getButtonVariant = (option: string) => {
    if (!isAnswered) return 'blue'
    if (option === currentQuestion.answer) return 'emerald'
    if (option === selectedAnswer) return 'rose'
    return 'blue'
  }

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <DuoHeader />

      {/* Main Content - 85vh */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: duoDefaultTheme.backgroundColor }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Title Box */}
              <div 
                className="rounded-xl border-4 p-6 sm:p-8 mb-8"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text mb-4">
                  Quiz Test Page - Chapter 1
                </h1>
                
                {/* Age Group Selection */}
                <div className="flex flex-col gap-4">
                  <DuoTemplateButton
                    variant="feather"
                    onClick={() => handleAgeGroupChange('age4to5')}
                  >
                    Ages 4-5
                  </DuoTemplateButton>
                  <DuoTemplateButton
                    variant="macaw"
                    onClick={() => handleAgeGroupChange('age6to7')}
                  >
                    Ages 6-7
                  </DuoTemplateButton>
                  <DuoTemplateButton
                    variant="lilac"
                    onClick={() => handleAgeGroupChange('age8to9')}
                  >
                    Ages 8-9
                  </DuoTemplateButton>
                </div>
              </div>

              {/* Progress and Score */}
              <div className="w-full max-w-lg mx-auto">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <div>Question {currentQuestionIndex + 1} of {questions.length}</div>
                  <div>Score: {score}</div>
                </div>
              </div>

              {/* Question */}
              <div className="w-full max-w-lg mx-auto pt-8">
                <div 
                  className="rounded-xl border-4 p-6 sm:p-8 mb-8"
                  style={{
                    borderColor: duoDefaultTheme.titleBoxBorderColor,
                    backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                  }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center font-din-round tracking-wider">
                    {currentQuestion.question}
                  </h2>
                </div>

                {/* Answer Options */}
                <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                  {currentQuestion.options.map((option, index) => (
                    <DuoTemplateButton
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      variant={getButtonVariant(option)}
                      disabled={isAnswered}
                    >
                      {option}
                    </DuoTemplateButton>
                  ))}
                </div>

                {/* Feedback Popup */}
                <FeedbackPopup
                  show={showExplanation}
                  isCorrect={selectedAnswer === currentQuestion.answer}
                  message={selectedAnswer === currentQuestion.answer ? "Correct!" : "Incorrect!"}
                  explanation={currentQuestion.explanation}
                  onTryAgain={selectedAnswer !== currentQuestion.answer ? handleRestart : undefined}
                  onContinue={handleNextQuestion}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestQuiz 