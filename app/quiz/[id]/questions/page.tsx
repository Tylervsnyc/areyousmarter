'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { questions, responses } from '../../questions'
import Navigation from '../../../components/Navigation'
import QuizProgress from '../../../components/QuizProgress'
import { playCorrectSound, playIncorrectSound } from '../../../components/SoundEffects'
import { getBackgroundForPath } from '@/app/utils/backgrounds'

export default function QuizQuestions() {
  const [userName, setUserName] = useState('')
  const [ageGroup, setAgeGroup] = useState<'5-7' | '8-9' | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<number[]>([])
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [showCorrectAnimation, setShowCorrectAnimation] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string
  const backgroundImage = getBackgroundForPath(`/quiz/${chapterId}/questions`)

  useEffect(() => {
    const name = sessionStorage.getItem('userName')
    const age = sessionStorage.getItem('ageGroup') as '5-7' | '8-9'
    
    if (!name || !age) {
      router.push(`/quiz/${chapterId}`)
      return
    }
    
    setUserName(name)
    setAgeGroup(age)
  }, [chapterId, router])

  if (!ageGroup || !questions[chapterId]) {
    return <div>Loading...</div>
  }

  const chapterQuestions = questions[chapterId][ageGroup === '5-7' ? 'younger' : 'older']
  const currentQuestionData = chapterQuestions[currentQuestion - 1]
  const chapterResponses = responses[chapterId]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    // Check if answer is correct
    const isCorrect = answerIndex === currentQuestionData.correctAnswer
    
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1)
      setShowCorrectAnimation(true)
      playCorrectSound()
      if (chapterResponses) {
        const randomIndex = Math.floor(Math.random() * chapterResponses.correctResponses.length)
        setResponseMessage(chapterResponses.correctResponses[randomIndex])
      }
      setTimeout(() => {
        setShowCorrectAnimation(false)
        setResponseMessage('')
      }, 1500)
    } else {
      playIncorrectSound()
      if (chapterResponses) {
        const randomIndex = Math.floor(Math.random() * chapterResponses.incorrectResponses.length)
        setResponseMessage(chapterResponses.incorrectResponses[randomIndex])
      }
      setTimeout(() => setResponseMessage(''), 1500)
    }

    // Wait for animation and sound to finish before moving to next question
    setTimeout(() => {
      if (currentQuestion < chapterQuestions.length) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        // Calculate final score
        const finalScore = newAnswers.reduce((total, answer, index) => {
          return total + (answer === chapterQuestions[index].correctAnswer ? 1 : 0)
        }, 0)

        // Store score and redirect to results
        sessionStorage.setItem('quizScore', finalScore.toString())
        router.push(`/quiz/${chapterId}/results`)
      }
    }, 1500)
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Page Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>
      
      <div className="relative max-w-4xl mx-auto pt-24 sm:pt-48 p-4 sm:p-8">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <QuizProgress currentQuestion={currentQuestion} totalQuestions={chapterQuestions.length} correctAnswers={correctAnswers} />
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">{currentQuestionData.question}</h2>
            <div className="space-y-2 sm:space-y-3">
              {currentQuestionData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-2 sm:p-3 rounded-lg border-2 hover:border-blue-500 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 