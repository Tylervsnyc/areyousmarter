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
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  const [ageGroup, setAgeGroup] = useState<'5-7' | '8-9' | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string
  const backgroundImage = getBackgroundForPath(`/quiz/${chapterId}/questions`)

  useEffect(() => {
    const age = sessionStorage.getItem('age')
    if (!age) {
      router.push(`/quiz/${chapterId}/age`)
      return
    }
    setAgeGroup(age as '5-7' | '8-9')
  }, [chapterId, router])

  if (!ageGroup || !questions[chapterId]) {
    return <div>Loading...</div>
  }

  const chapterQuestions = questions[chapterId][ageGroup === '5-7' ? 'younger' : 'older']
  const currentQuestionData = chapterQuestions[currentQuestion]
  const chapterResponses = responses[chapterId]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    // Check if answer is correct
    const isCorrect = answerIndex === currentQuestionData.correctAnswer
    
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1)
      setIsCorrect(true)
      playCorrectSound()
      if (chapterResponses) {
        // Show fireworks for correct answer
        const fireworksContainer = document.createElement('div')
        fireworksContainer.className = 'fixed inset-0 pointer-events-none z-50'
        document.body.appendChild(fireworksContainer)

        // Create multiple fireworks
        for (let i = 0; i < 3; i++) {
          const firework = document.createElement('div')
          firework.className = `absolute w-4 h-4 rounded-full animate-firework-${i + 1}`
          firework.style.left = `${Math.random() * 100}%`
          firework.style.top = `${Math.random() * 100}%`
          firework.style.backgroundColor = ['#FFD700', '#FF69B4', '#4169E1'][i]
          firework.style.animationDelay = `${i * 0.2}s`
          fireworksContainer.appendChild(firework)
        }

        // Remove fireworks after animation
        setTimeout(() => {
          document.body.removeChild(fireworksContainer)
        }, 1500)
      }
      setTimeout(() => {
        setIsCorrect(false)
      }, 1500)
    } else {
      playIncorrectSound()
      if (chapterResponses) {
        // Handle incorrect response
      }
      setTimeout(() => {
        // Handle incorrect response
      }, 1500)
    }

    // Wait for animation and sound to finish before moving to next question
    setTimeout(() => {
      if (currentQuestion < chapterQuestions.length - 1) {
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
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-8">
          <QuizProgress currentQuestion={currentQuestion + 1} totalQuestions={chapterQuestions.length} correctAnswers={correctAnswers} isCorrectAnimation={isCorrect} />
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

      {/* Fireworks animations */}
      <style jsx global>{`
        @keyframes firework-1 {
          0% { transform: scale(0); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes firework-2 {
          0% { transform: scale(0) rotate(45deg); opacity: 1; }
          50% { transform: scale(1.5) rotate(45deg); opacity: 0.8; }
          100% { transform: scale(2) rotate(45deg); opacity: 0; }
        }
        @keyframes firework-3 {
          0% { transform: scale(0) rotate(-45deg); opacity: 1; }
          50% { transform: scale(1.5) rotate(-45deg); opacity: 0.8; }
          100% { transform: scale(2) rotate(-45deg); opacity: 0; }
        }
        .animate-firework-1 {
          animation: firework-1 1s ease-out forwards;
        }
        .animate-firework-2 {
          animation: firework-2 1s ease-out forwards;
        }
        .animate-firework-3 {
          animation: firework-3 1s ease-out forwards;
        }
      `}</style>
    </main>
  )
} 