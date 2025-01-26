'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import questions from '../../questions'

export default function QuizQuestions() {
  const [userName, setUserName] = useState('')
  const [ageGroup, setAgeGroup] = useState<'5-7' | '8-9' | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
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
  const currentQuestionData = chapterQuestions[currentQuestion]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion + 1 < chapterQuestions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate score
      const score = newAnswers.reduce((total, answer, index) => {
        return total + (answer === chapterQuestions[index].correctAnswer ? 1 : 0)
      }, 0)

      // Store score and redirect to results
      sessionStorage.setItem('quizScore', score.toString())
      router.push(`/quiz/${chapterId}/results`)
    }
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Question {currentQuestion + 1} of {chapterQuestions.length}</h2>
            <span className="text-gray-600">Hi {userName}!</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / chapterQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl mb-6">{currentQuestionData.question}</h3>
          
          <div className="space-y-4">
            {currentQuestionData.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left border rounded-lg hover:bg-gray-50"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 