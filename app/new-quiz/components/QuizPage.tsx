'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { DuoTemplateButton } from './DuoTemplateButton'
import DuoHeader from './DuoHeader'
import FeedbackPopup from './FeedbackPopup'
import { duoDefaultTheme } from '../styles'
import type { ChapterData, QuestionsByAge } from '../types'
import { playCorrectSound } from '../utils/sounds'
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics'

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

const getRandomQuip = (isCorrect: boolean) => {
  const quips = isCorrect ? rightAnswerQuips : wrongAnswerQuips
  return quips[Math.floor(Math.random() * quips.length)]
}

interface QuizState {
  currentQuestionIndex: number
  score: number
  answers: string[]
  isAnswered: boolean
  message: string
  messageType: 'correct' | 'incorrect' | null
}

const getAgeGroupKey = (age: string): keyof QuestionsByAge => {
  switch (age) {
    case '4-5':
      return 'age4to5'
    case '6-7':
      return 'age6to7'
    case '8-9':
      return 'age8to9'
    default:
      return 'age4to5'
  }
}

interface QuizPageProps {
  chapter: ChapterData
  age: string
  name: string
}

export function QuizPage({ chapter, age, name }: QuizPageProps) {
  const router = useRouter()

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    isAnswered: false,
    message: '',
    messageType: null
  })

  const ageGroupKey = getAgeGroupKey(age)
  const questions = chapter.questions[ageGroupKey]

  // Prevent scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const playSound = (isCorrect: boolean) => {
    if (isCorrect) {
      playCorrectSound();
    } else {
      const sound = new Audio('/sounds/incorrect.wav');
      sound.volume = 0.5;
      sound.play().catch(console.error);
    }
  }

  const handleAnswer = (selectedAnswer: string) => {
    if (quizState.isAnswered) return

    const currentQuestion = questions[quizState.currentQuestionIndex]
    const isCorrect = selectedAnswer === currentQuestion.answer

    playSound(isCorrect)

    // Track question answer
    trackEvent(ANALYTICS_EVENTS.QUESTION_ANSWER, {
      chapterId: chapter.id,
      questionId: currentQuestion.id,
      questionIndex: quizState.currentQuestionIndex,
      isCorrect,
      selectedAnswer,
      correctAnswer: currentQuestion.answer,
      age
    })

    setQuizState(prev => ({
      ...prev,
      isAnswered: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, selectedAnswer],
      message: getRandomQuip(isCorrect),
      messageType: isCorrect ? 'correct' : 'incorrect'
    }))
  }

  const handleNext = () => {
    if (quizState.currentQuestionIndex === questions.length - 1) {
      // Track quiz completion before navigation
      trackEvent(ANALYTICS_EVENTS.QUIZ_COMPLETE, {
        chapterId: chapter.id,
        score: quizState.score,
        totalQuestions: questions.length,
        age,
        name,
        answers: quizState.answers
      })
      
      // Quiz completed, navigate to results
      router.push(`/new-quiz/${chapter.id}/results?score=${quizState.score}&name=${encodeURIComponent(name)}&age=${age}`)
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

  const handleTryAgain = () => {
    setQuizState(prev => ({
      ...prev,
      isAnswered: false,
      message: '',
      messageType: null
    }))
  }

  const currentQuestion = questions[quizState.currentQuestionIndex]

  const getButtonVariant = (option: string, index: number) => {
    if (!quizState.isAnswered) {
      // Each button gets a specific color
      const colors = ['feather', 'lilac', 'macaw', 'bee'] as const
      return colors[index % 4]
    }
    if (option === currentQuestion.answer) return 'macaw' // Correct answer shows in blue
    if (option === quizState.answers[quizState.currentQuestionIndex]) return 'cardinal' // Wrong answer shows in red
    return 'macaw' // Other options stay blue
  }

  const handleBackButtonPress = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(`/new-quiz/${chapter.id}/age?name=${encodeURIComponent(name)}`)
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
            {/* Progress Bar */}
            <div className="w-full max-w-lg mx-auto pt-4">
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-emerald-500 rounded-full transition-all duration-300"
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
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center font-din-round tracking-wider">
                  {currentQuestion.question}
                </h1>
              </div>

              {/* Answer Options */}
              <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                {currentQuestion.options.map((option: string, index: number) => (
                  <DuoTemplateButton
                    key={index}
                    variant={getButtonVariant(option, index)}
                    onClick={() => handleAnswer(option)}
                    disabled={quizState.isAnswered}
                  >
                    {option}
                  </DuoTemplateButton>
                ))}
              </div>

              {/* Feedback Popup */}
              <FeedbackPopup
                show={quizState.isAnswered}
                isCorrect={quizState.messageType === 'correct'}
                message={quizState.message}
                explanation={currentQuestion.explanation}
                onTryAgain={quizState.messageType === 'incorrect' ? handleTryAgain : undefined}
                onContinue={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 