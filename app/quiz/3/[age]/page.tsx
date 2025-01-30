'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import BackgroundPattern from '../../../components/BackgroundPattern'
import chapter3Data from '../../../data/chapter3.json'

type Pattern = 'dots' | 'grid' | 'paper' | 'brush' | 'waves'
type Tone = 'light' | 'warm' | 'cool'

interface Question {
  id: number
  question: string
  options: string[]
  correct_answer: string
  host_reactions: {
    correct: string
    incorrect: string
  }
}

interface ChapterData {
  id: string
  metadata: {
    theme: {
      pattern: Pattern
      tone: Tone
    }
  }
  screens: {
    quiz: {
      younger: {
        questions: Question[]
      }
      older: {
        questions: Question[]
      }
    }
  }
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('')
  const [isAnswered, setIsAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''
  const version = searchParams.get('version') || 'easy'
  const ageGroup = params.age as string

  const chapter = chapter3Data as ChapterData
  const questions = version === 'easy' 
    ? chapter.screens.quiz.younger.questions 
    : chapter.screens.quiz.older.questions

  const { pattern, tone } = chapter.metadata.theme

  const handleAnswer = (answer: string) => {
    if (isAnswered) return

    setSelectedAnswer(answer)
    setIsAnswered(true)

    const isCorrect = answer === questions[currentQuestion].correct_answer
    if (isCorrect) {
      setScore(prev => prev + 1)
      setMessage(questions[currentQuestion].host_reactions.correct)
    } else {
      setMessage(questions[currentQuestion].host_reactions.incorrect)
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1)
        setIsAnswered(false)
        setSelectedAnswer(null)
        setMessage('')
      } else {
        const timestamp = Date.now()
        router.push(`/quiz/3/results?score=${score + (isCorrect ? 1 : 0)}&total=${questions.length}&name=${name}&t=${timestamp}`)
      }
    }, 2000)
  }

  useEffect(() => {
    const savedName = sessionStorage.getItem('name')
    const savedAge = sessionStorage.getItem('ageGroup')
    if (!savedName || !savedAge) {
      router.push('/quiz/3')
    }
  }, [router])

  if (!questions[currentQuestion]) return null

  return (
    <BackgroundPattern pattern={pattern} tone={tone}>
      <main className="relative min-h-screen">
        <Navigation />
        
        <div className="absolute top-0 left-0 w-full h-32">
          <Image
            src="/images/header.jpg"
            alt="Chapter Header"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/70" />
        </div>
        
        <div className="relative max-w-4xl mx-auto pt-24 sm:pt-48 p-4 sm:p-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-8">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-2">Question {currentQuestion + 1} of {questions.length}</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{questions[currentQuestion].question}</h2>
                {message && (
                  <p className="mt-4 text-lg font-medium text-indigo-600">{message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={isAnswered}
                    className={`p-4 text-lg font-medium rounded-lg transition-colors ${
                      isAnswered
                        ? option === questions[currentQuestion].correct_answer
                          ? 'bg-green-500 text-white'
                          : option === selectedAnswer
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </BackgroundPattern>
  )
} 