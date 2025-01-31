'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import BackgroundPattern from '../../../components/BackgroundPattern'
import QuizProgress from '../../../components/QuizProgress'
import { playCorrectSound, playIncorrectSound } from '../../../components/SoundEffects'
import chapter1Data from '../../../data/chapter1.json'
import chapter2Data from '../../../data/chapter2.json'
import chapter3Data from '../../../data/chapter3.json'

type Pattern = 'dots' | 'grid' | 'paper' | 'brush' | 'waves'
type Tone = 'light' | 'warm' | 'cool'

interface ChapterData {
  id: string
  metadata: {
    title: string
    host: {
      name: string
      type: string
      traits: string[]
      description: string
    }
    financial_tracker: {
      bike_goal: number
      starting_balance: number
      money_earned: number
      current_balance: number
      remaining_goal: number
    }
    theme: {
      pattern: Pattern
      tone: Tone
    }
  }
  screens: {
    quiz: {
      younger: {
        questions: Array<{
          id: number
          question: string
          options: string[]
          correct_answer: string
          host_reactions: {
            correct: string
            incorrect: string
          }
        }>
      }
      older: {
        questions: Array<{
          id: number
          question: string
          options: string[]
          correct_answer: string
          host_reactions: {
            correct: string
            incorrect: string
          }
        }>
      }
    }
  }
}

const chapters: Record<string, ChapterData> = {
  '1': chapter1Data as ChapterData,
  '2': chapter2Data as ChapterData,
  '3': chapter3Data as ChapterData
}

export default function QuizQuestions() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [ageGroup, setAgeGroup] = useState<'5-7' | '8-9' | null>(null)
  const [answers, setAnswers] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string

  useEffect(() => {
    const age = sessionStorage.getItem('ageGroup')
    if (!age) {
      router.push(`/quiz/${chapterId}/age`)
      return
    }
    setAgeGroup(age as '5-7' | '8-9')
  }, [chapterId, router])

  const chapter = chapters[chapterId]
  if (!chapter || !ageGroup) {
    return <div>Loading...</div>
  }

  const questions = chapter.screens.quiz[ageGroup === '5-7' ? 'younger' : 'older'].questions
  const currentQuestionData = questions[currentQuestion]

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    // Check if answer is correct
    const isCorrect = answer === currentQuestionData.correct_answer
    
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1)
      setIsCorrect(true)
      setMessage(currentQuestionData.host_reactions.correct)
      playCorrectSound()
      
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
    } else {
      setMessage(currentQuestionData.host_reactions.incorrect)
      playIncorrectSound()
    }

    // Wait for animation and sound to finish before moving to next question
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setMessage('')
        setIsCorrect(false)
      } else {
        // Calculate final score
        const finalScore = newAnswers.reduce((total, answer, index) => {
          return total + (answer === questions[index].correct_answer ? 1 : 0)
        }, 0)

        // Store score and redirect to results
        sessionStorage.setItem('quizScore', finalScore.toString())
        router.push(`/quiz/${chapterId}/results`)
      }
    }, 1500)
  }

  return (
    <BackgroundPattern pattern={chapter.metadata.theme.pattern} tone={chapter.metadata.theme.tone}>
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>
        
        <div className="relative max-w-4xl mx-auto pt-24 sm:pt-48 p-4 sm:p-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-8">
            <QuizProgress 
              currentQuestion={currentQuestion + 1} 
              totalQuestions={questions.length} 
              correctAnswers={correctAnswers} 
              isCorrectAnimation={isCorrect} 
            />
            
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">{currentQuestionData.question}</h2>
                {message && (
                  <p className={`mt-4 text-lg font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                  </p>
                )}
              </div>
              
              <div className="flex flex-col max-w-md mx-auto space-y-3">
                {currentQuestionData.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="p-3 text-base font-medium text-center rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

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
    </BackgroundPattern>
  )
} 