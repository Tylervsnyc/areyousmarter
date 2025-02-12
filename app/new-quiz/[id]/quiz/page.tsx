'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getChapter } from '../../data'
import { DuoTemplateButton } from '../../components/DuoTemplateButton'
import DuoHeader from '../../components/DuoHeader'
import { duoFontStyles, duoDefaultTheme } from '../../styles'
import type { Question, MultipleChoiceQuestion } from '@/types'

interface QuizState {
  currentQuestionIndex: number
  score: number
  answers: string[]
  isAnswered: boolean
  message: string
  messageType: 'correct' | 'incorrect' | null
}

export default function QuizPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''
  const ageRange = searchParams.get('age') || ''

  const chapter = getChapter(params.id)
  if (!chapter) {
    notFound()
  }

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    isAnswered: false,
    message: '',
    messageType: null
  })

  const questions = chapter.questions

  // Prevent scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleAnswer = (selectedAnswer: string) => {
    if (quizState.isAnswered) return

    const currentQuestion = questions[quizState.currentQuestionIndex]
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer

    setQuizState(prev => ({
      ...prev,
      isAnswered: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, selectedAnswer],
      message: isCorrect ? 'Purr-fect! That\'s correct!' : 'Oops! Not quite right!',
      messageType: isCorrect ? 'correct' : 'incorrect'
    }))
  }

  const handleNext = () => {
    if (quizState.currentQuestionIndex === questions.length - 1) {
      // Quiz completed, navigate to results
      router.push(`/new-quiz/${params.id}/results?score=${quizState.score}&name=${encodeURIComponent(name)}&age=${ageRange}`)
      return
    }

    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      isAnswered: false,
      message: '',
      messageType: null
    }))
  }

  const currentQuestion = questions[quizState.currentQuestionIndex]

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{duoFontStyles}</style>

      {/* Header */}
      <DuoHeader />

      {/* Main Content - 85vh */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: duoDefaultTheme.backgroundColor }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Progress Bar */}
            <div className="w-full max-w-lg mx-auto pt-4">
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-300"
                  style={{ width: `${((quizState.currentQuestionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
              <p className="text-center text-sm mt-2 text-gray-600">
                Question {quizState.currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-4">
              {/* Question Box */}
              <div 
                className="rounded-xl border-4 p-6 sm:p-8 mb-8"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center title-text">
                  {currentQuestion.text}
                </h1>
              </div>

              {/* Message Display */}
              {quizState.message && (
                <div 
                  className={`rounded-xl border-4 p-4 mb-8 ${
                    quizState.messageType === 'correct' 
                      ? 'bg-green-100/90 border-green-400' 
                      : 'bg-red-100/90 border-red-400'
                  }`}
                >
                  <p className={`text-lg text-center font-medium title-text ${
                    quizState.messageType === 'correct' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {quizState.message}
                  </p>
                  {currentQuestion.explanation && quizState.isAnswered && (
                    <p className="text-gray-600 text-center mt-2">
                      {currentQuestion.explanation}
                    </p>
                  )}
                </div>
              )}

              {/* Answer Options */}
              <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                {(currentQuestion as MultipleChoiceQuestion).options.map((option: string, index: number) => (
                  <DuoTemplateButton
                    key={index}
                    variant={
                      !quizState.isAnswered
                        ? 'blue'
                        : option === (currentQuestion as MultipleChoiceQuestion).correctAnswer
                        ? 'green'
                        : option === quizState.answers[quizState.currentQuestionIndex]
                        ? 'pink'
                        : 'blue'
                    }
                    onClick={() => handleAnswer(option)}
                    disabled={quizState.isAnswered}
                  >
                    {option}
                  </DuoTemplateButton>
                ))}

                {quizState.isAnswered && (
                  <DuoTemplateButton
                    variant="yellow"
                    onClick={handleNext}
                  >
                    {quizState.currentQuestionIndex === questions.length - 1 
                      ? 'See Results' 
                      : 'Next Question'}
                  </DuoTemplateButton>
                )}
              </div>

              {/* Mr. Fluffbutt Image */}
              <div className="w-32 h-32 relative animate-[bounce_3s_ease-in-out_infinite] mx-auto mt-8">
                <div className="absolute inset-0 rounded-full border-4 border-yellow-400 overflow-hidden">
                  <Image
                    src="/images/mrfb.jpg"
                    alt="Mr. Fluffbutt"
                    fill
                    className="object-cover animate-[wiggle_2s_ease-in-out_infinite]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 