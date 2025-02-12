'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { trackUserProgress, trackQuestionAnswer } from '../utils/analytics'
import { useButtonSound } from '../hooks/useButtonSound'
import { Suspense } from 'react'

const rightAnswerQuips = [
  "Purrfect!",
  "Meow-velous!",
  "You're feline fine!",
  "That's cat-tastic!",
  "Whisker-sharp thinking!",
  "You're not as hopeless as I thought!",
  "Well... I suppose that's correct.",
  "Hmph! Lucky guess...",
  "*purrs approvingly*",
  "Not bad... for a human."
]

const wrongAnswerQuips = [
  "Oh dear...",
  "*unimpressed cat stare*",
  "Are you even trying?",
  "My litterbox has better answers!",
  "Even a dog could do better!",
  "*licks paw judgmentally*",
  "How... disappointing.",
  "I expected nothing, and I'm still let down.",
  "*tail swishes in disapproval*",
  "Back to math class with you!"
]

interface Question {
  question: string
  options: string[]
  answer: string
  type?: string
}

interface QuizTemplateProps {
  /**
   * The quiz ID (used for routing and analytics)
   */
  id: string
  questions: Question[]
  quizType: string
}

function QuizContent({ id, questions, quizType }: QuizTemplateProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [correctSound, setCorrectSound] = useState<HTMLAudioElement | null>(null)
  const [incorrectSound, setIncorrectSound] = useState<HTMLAudioElement | null>(null)
  
  const router = useRouter()
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''
  const playButtonSound = useButtonSound()

  useEffect(() => {
    // Initialize audio elements
    setCorrectSound(new Audio('/sounds/correct.wav'))
    setIncorrectSound(new Audio('/sounds/incorrect.wav'))
    
    // Track quiz start
    trackUserProgress('quiz_started', id)
  }, [id])

  const playSound = (isCorrect: boolean) => {
    const audio = new Audio()
    audio.volume = 0.4 // Set volume to 40%

    if (isCorrect) {
      // Randomly select one of the correct sounds
      const correctSounds = [
        '/sounds/Correct/correct.wav',
        '/sounds/Correct/correctcat1.mp3',
        '/sounds/Correct/correctcat2.mp3',
        '/sounds/Correct/correctcat3.mp3'
      ]
      const randomIndex = Math.floor(Math.random() * correctSounds.length)
      audio.src = correctSounds[randomIndex]
    } else {
      audio.src = '/sounds/incorrect.wav'
    }

    audio.play().catch(error => console.log('Error playing sound:', error))
  }

  const getRandomQuip = (isCorrect: boolean) => {
    const quips = isCorrect ? rightAnswerQuips : wrongAnswerQuips
    return quips[Math.floor(Math.random() * quips.length)]
  }

  const handleAnswer = (selectedIndex: number) => {
    playButtonSound()
    if (showFeedback) return
    
    setSelectedAnswer(selectedIndex)
    
    const currentQ = questions[currentQuestion]
    if (!('options' in currentQ) || !('answer' in currentQ)) {
      console.error('Invalid question type for standard answer handling:', currentQ)
      return
    }
    
    const isCorrect = currentQ.options[selectedIndex] === currentQ.answer
    setIsAnswerCorrect(isCorrect)
    
    // Track question answer
    trackQuestionAnswer(
      currentQuestion.toString(),
      isCorrect,
      id
    )
    
    if (isCorrect) {
      setScore(score + 1)
      playSound(true)
    } else {
      playSound(false)
    }
    
    const newQuip = getRandomQuip(isCorrect)
    setFeedbackMessage(newQuip)
    setShowFeedback(true)
  }

  const handleContinue = () => {
    playButtonSound()
    if (currentQuestion === questions.length - 1) {
      // Calculate final score including the current question
      const finalScore = score + (isAnswerCorrect ? 1 : 0)
      // Track quiz completion before navigating
      trackUserProgress('quiz_completed', id)
      // Quiz completed, navigate to results
      router.push(`/quiz/${id}/results?name=${encodeURIComponent(name)}&score=${finalScore}&type=${quizType}`)
    } else {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="relative h-[15vh] w-full flex-shrink-0">
        <Image
          src="/images/header.jpg"
          alt="Header Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Logo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Link href="https://www.learnthroughstories.com/">
            <Image
              src="/images/logo.png"
              alt="Learn Through Stories"
              width={100}
              height={25}
              priority
            />
          </Link>
        </div>
        {/* Substack */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <Link href="https://learnthroughstories.substack.com/">
            <Image
              src="/images/substack.jpg"
              alt="Subscribe to Learn Through Stories"
              width={80}
              height={20}
              priority
            />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: '#FFFDD0' }}>
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
              <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-6 sm:p-8 mb-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center title-text">
                  {questions[currentQuestion].question}
                </h1>
              </div>

              {/* Answer Options */}
              <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showFeedback}
                    className={`
                      w-full py-4 px-6 rounded-xl text-lg font-bold shadow-lg transition-all
                      ${selectedAnswer === index 
                        ? isAnswerCorrect 
                          ? 'bg-green-500 text-white border-b-4 border-green-600'
                          : 'bg-red-500 text-white border-b-4 border-red-600'
                        : 'bg-blue-500 text-white border-b-4 border-blue-600 hover:bg-blue-600'
                      }
                      ${showFeedback ? 'opacity-75 cursor-not-allowed' : ''}
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>
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
              </div>
            </div>
            <button
              onClick={handleContinue}
              className="w-full mt-6 py-4 px-6 bg-blue-500 text-white font-bold rounded-xl shadow-lg border-b-4 border-blue-600 hover:bg-blue-600 transition-all"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function QuizTemplate({
  id,
  questions,
  quizType
}: QuizTemplateProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuizContent id={id} questions={questions} quizType={quizType} />
    </Suspense>
  )
} 