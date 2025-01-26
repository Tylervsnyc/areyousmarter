'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { questions, responses } from '../../questions'
import Navigation from '../../../components/Navigation'
import QuizProgress from '../../../components/QuizProgress'
import { playCorrectSound, playIncorrectSound } from '../../../components/SoundEffects'

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
      
      {chapterId === '2' && (
        <div className="absolute top-0 left-0 w-full h-48">
          <Image
            src="/images/header.jpg"
            alt="Royal Header"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>
      )}
      
      <div className="max-w-4xl mx-auto pt-24 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Chapter {chapterId}</h2>
            <span className="text-gray-600">Hi {userName}!</span>
          </div>

          <QuizProgress 
            currentQuestion={currentQuestion} 
            correctAnswers={correctAnswers}
            totalQuestions={chapterQuestions.length}
            isCorrectAnimation={showCorrectAnimation}
          />

          {responseMessage && (
            <div className={`mb-6 p-4 rounded-lg text-center text-lg ${
              showCorrectAnimation 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {responseMessage}
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-2xl mb-6">{currentQuestionData.question}</h3>
            
            <div className="space-y-4">
              {currentQuestionData.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-4 text-left border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all transform hover:scale-[1.01]"
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