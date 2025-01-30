'use client'

import { useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import chapter3Data from '../../../data/chapter3.json'

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('')

  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''
  const version = searchParams.get('version') || 'easy'

  const questions = version === 'easy' 
    ? chapter3Data.screens.quiz.younger.questions 
    : chapter3Data.screens.quiz.older.questions

  const handleAnswer = (answer: string) => {
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
        setMessage('')
      } else {
        router.push(`/quiz/3/results?score=${score + (isCorrect ? 1 : 0)}&total=${questions.length}&name=${name}`)
      }
    }, 1000)
  }

  if (!questions[currentQuestion]) return null

  return (
    <div className="p-4">
      <h1>Question {currentQuestion + 1} of {questions.length}</h1>
      <p>{questions[currentQuestion].question}</p>
      {message && <p>{message}</p>}
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
} 