'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { duoFontStyles, duoDefaultTheme } from '../styles'
import { DuoTemplateButton } from '../buttons/page'
import DuoHeader from './DuoHeader'

interface BaseQuizQuestion {
  question: string
  explanation?: string
  type?: string
  hideQuestionBox?: boolean
}

interface StandardQuizQuestion extends BaseQuizQuestion {
  type?: 'standard'
  options: string[]
  answer: string
}

interface MatchingQuizQuestion extends BaseQuizQuestion {
  type: 'matching'
  component: React.ComponentType<any>
  componentProps: any
}

interface SortingQuizQuestion extends BaseQuizQuestion {
  type: 'sorting'
  component: React.ComponentType<any>
  componentProps: {
    animals: Array<{
      id: string
      name: string
      emoji: string
      isCorrectlySafe: boolean
    }>
  }
}

type QuizQuestion = StandardQuizQuestion | MatchingQuizQuestion | SortingQuizQuestion

interface QuizTemplateProps {
  questions: QuizQuestion[]
  chapterNumber: string
  quizType: 'easy' | 'hard'
}

const rightAnswerQuips = [
  "Purrfectly calculated!",
  "Almost as smart as a cat!",
  "You've earned a royal head bump!",
  "My whiskers are tingling with approval!",
  "Not bad for a two-legged creature!",
  "You're making this cat purr with pride!",
  "Finally, a human who can count!",
  "My royal mathematician!",
  "Better than chasing laser dots!",
  "You've pleased His Majesty!"
]

const wrongAnswerQuips = [
  "Try again!",
  "Even a sleeping cat counts better!",
  "Did you count on your toes?",
  "Is that your final answer?",
  "My litterbox math is better than that!",
  "Wrong!",
  "Were you distracted by a red dot?",
  "Did a dog help you with that?",
  "No, no, no!",
  "Back to math class with you!"
]

function QuizContent({ questions, chapterNumber, quizType }: QuizTemplateProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  
  const router = useRouter()
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''

  const getRandomQuip = (isCorrect: boolean) => {
    const quips = isCorrect ? rightAnswerQuips : wrongAnswerQuips
    return quips[Math.floor(Math.random() * quips.length)]
  }

  const handleAnswer = (selectedIndex: number) => {
    if (showFeedback) return
    
    setSelectedAnswer(selectedIndex)
    const currentQ = questions[currentQuestion]
    
    // Handle special question types
    if (currentQ.type === 'matching' || currentQ.type === 'sorting') {
      return // These types handle their own answers
    }
    
    // Standard question handling
    if (!('options' in currentQ) || !('answer' in currentQ)) {
      console.error('Invalid question type:', currentQ)
      return
    }
    
    const isCorrect = currentQ.options[selectedIndex] === currentQ.answer
    setIsAnswerCorrect(isCorrect)
    
    if (isCorrect) {
      setScore(score + 1)
      new Audio('/sounds/correct.wav').play().catch(console.error)
    } else {
      new Audio('/sounds/incorrect.wav').play().catch(console.error)
    }
    
    setFeedbackMessage(getRandomQuip(isCorrect))
    setShowFeedback(true)
  }

  const handleContinue = () => {
    if (currentQuestion === questions.length - 1) {
      // Calculate final score including the current question
      const finalScore = score + (isAnswerCorrect ? 1 : 0)
      // Navigate to results with the final score
      router.push(`/quiz/${chapterNumber}/results?name=${encodeURIComponent(name)}&score=${finalScore}`)
    } else {
      // Move to next question
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  const renderQuestion = () => {
    const currentQ = questions[currentQuestion]
    
    // Handle special question types
    if (currentQ.type === 'matching' || currentQ.type === 'sorting') {
      const CustomComponent = currentQ.component
      return (
        <CustomComponent
          {...currentQ.componentProps}
          onAnswer={(isCorrect: boolean) => {
            if (showFeedback) return // Prevent multiple answers
            
            setIsAnswerCorrect(isCorrect)
            if (isCorrect) {
              setScore(score + 1)
              new Audio('/sounds/correct.wav').play().catch(console.error)
            } else {
              new Audio('/sounds/incorrect.wav').play().catch(console.error)
            }
            
            // Show feedback popup with appropriate message
            setFeedbackMessage(getRandomQuip(isCorrect))
            setShowFeedback(true)
          }}
          isAnswered={showFeedback}
        />
      )
    }

    // Standard question rendering - ensure we have a standard question type
    if (!('options' in currentQ)) {
      console.error('Invalid question type:', currentQ)
      return null
    }

    return (
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto px-4">
        {(currentQ as StandardQuizQuestion).options.map((option: string, index: number) => (
          <DuoTemplateButton
            key={index}
            variant={selectedAnswer === index ? (isAnswerCorrect ? 'green' : 'pink') : 'blue'}
            onClick={() => handleAnswer(index)}
            disabled={showFeedback}
          >
            {option}
          </DuoTemplateButton>
        ))}
      </div>
    )
  }

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{duoFontStyles}</style>

      {/* Header */}
      <DuoHeader />

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: duoDefaultTheme.backgroundColor }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Progress */}
              <div className="mb-8">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
                <div className="text-center mt-2 text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
              </div>

              {/* Question Box */}
              {!questions[currentQuestion].hideQuestionBox && (
                <div 
                  className="rounded-xl border-4 p-6 sm:p-8 mb-8"
                  style={{
                    borderColor: duoDefaultTheme.titleBoxBorderColor,
                    backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                  }}
                >
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center title-text">
                    {questions[currentQuestion].question}
                  </h1>
                </div>
              )}

              {/* Question Content */}
              {renderQuestion()}
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Popup */}
      {showFeedback && (
        <div className="fixed inset-x-0 bottom-0 p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md mx-auto shadow-lg border-4 border-yellow-400">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full border-4 border-yellow-400 overflow-hidden">
                  <Image
                    src="/images/mrfb.jpg"
                    alt="Mr. Fluffbutt"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xl font-bold text-gray-900 mb-1">
                  {isAnswerCorrect ? 'Purr-fect!' : 'Meow No!'}
                </div>
                <div className="text-lg text-gray-700">
                  {feedbackMessage}
                </div>
                {questions[currentQuestion].explanation && (
                  <div className="text-sm text-gray-600 mt-2">
                    {questions[currentQuestion].explanation}
                  </div>
                )}
              </div>
            </div>
            <DuoTemplateButton
              variant="blue"
              onClick={handleContinue}
              className="mt-6"
            >
              Continue
            </DuoTemplateButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default function QuizTemplate(props: QuizTemplateProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuizContent {...props} />
    </Suspense>
  )
} 