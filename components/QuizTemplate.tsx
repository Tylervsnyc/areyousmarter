'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import MagicProgressBar from './MagicProgressBar'
import { trackUserProgress, trackQuestionAnswer } from '@/app/utils/analytics'

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
  chapterNumber: string | number
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
  "You've pleased His Majesty!",
  "Worthy of sharing my cushion!",
  "A treat for your brain!",
  "My apprentice taught you well!",
  "Almost as clever as me... almost.",
  "Royal paw of approval!",
  "You've earned a whisker twitch!",
  "Meow-velous calculation!",
  "You're thinking like a cat!",
  "Royal court mathematician!",
  "You've earned your catnip!"
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
  "Back to math class with you!",
  "Not worthy of my royal approval... yet.",
  "Is that your best attempt?",
  "Even my naps are more accurate!",
  "Time for remedial counting lessons!",
  "Try again!",
  "Did you forget how to count treats?",
  "My whiskers say that's wrong!",
  "Back to kitten school!",
  "Oh, the horror!",
  "The royal court is not impressed!"
]

function QuizContent({ questions, chapterNumber, quizType }: QuizTemplateProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [quip, setQuip] = useState('')
  const [showQuip, setShowQuip] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [correctSound, setCorrectSound] = useState<HTMLAudioElement | null>(null)
  const [incorrectSound, setIncorrectSound] = useState<HTMLAudioElement | null>(null)
  
  const router = useRouter()
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''

  useEffect(() => {
    // Initialize audio elements
    setCorrectSound(new Audio('/sounds/correct.wav'))
    setIncorrectSound(new Audio('/sounds/incorrect.wav'))
    
    // Track quiz start
    trackUserProgress('quiz_started', chapterNumber.toString())
  }, [chapterNumber])

  const playSound = (isCorrect: boolean) => {
    if (isCorrect && correctSound) {
      correctSound.currentTime = 0
      correctSound.play().catch(console.error)
    } else if (!isCorrect && incorrectSound) {
      incorrectSound.currentTime = 0
      incorrectSound.play().catch(console.error)
    }
  }

  const getRandomQuip = (isCorrect: boolean) => {
    const quips = isCorrect ? rightAnswerQuips : wrongAnswerQuips
    return quips[Math.floor(Math.random() * quips.length)]
  }

  const handleAnswer = (selectedIndex: number) => {
    if (isAnswered) return
    
    setSelectedAnswer(selectedIndex)
    setIsAnswered(true)
    
    const currentQ = questions[currentQuestion]
    if (!('options' in currentQ) || !('answer' in currentQ)) {
      console.error('Invalid question type for standard answer handling:', currentQ)
      return
    }
    
    const isCorrect = currentQ.options[selectedIndex] === currentQ.answer
    
    // Track question answer
    trackQuestionAnswer(
      currentQuestion.toString(),
      isCorrect,
      chapterNumber.toString()
    )
    
    if (isCorrect) {
      setScore(score + 1)
      playSound(true)
    } else {
      playSound(false)
    }
    
    const newQuip = getRandomQuip(isCorrect)
    setQuip(newQuip)
    setShowQuip(true)

    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        // Calculate final score including the current question
        const finalScore = score + (isCorrect ? 1 : 0)
        // Track quiz completion before navigating
        trackUserProgress('quiz_completed', chapterNumber.toString())
        // Quiz completed, navigate to results with the correct final score
        router.push(`/quiz/${chapterNumber}/results?name=${encodeURIComponent(name)}&score=${finalScore}&type=${quizType}`)
      } else {
        setCurrentQuestion(currentQuestion + 1)
        setIsAnswered(false)
        setSelectedAnswer(null)
        setShowQuip(false)
      }
    }, 2000)
  }

  const renderQuestion = () => {
    const currentQ = questions[currentQuestion]
    
    if (currentQ.type === 'matching' || currentQ.type === 'sorting') {
      const CustomComponent = currentQ.component
      return (
        <CustomComponent
          {...currentQ.componentProps}
          onAnswer={(isCorrect: boolean) => {
            if (isAnswered) return
            setIsAnswered(true)
            
            if (isCorrect) {
              setScore(score + 1)
              playSound(true)
            } else {
              playSound(false)
            }
            
            const newQuip = getRandomQuip(isCorrect)
            setQuip(newQuip)
            setShowQuip(true)

            setTimeout(() => {
              if (currentQuestion === questions.length - 1) {
                // Calculate final score including the current question
                const finalScore = score + (isCorrect ? 1 : 0)
                trackUserProgress('quiz_completed', chapterNumber.toString())
                router.push(`/quiz/${chapterNumber}/results?name=${encodeURIComponent(name)}&score=${finalScore}&type=${quizType}`)
              } else {
                setCurrentQuestion(currentQuestion + 1)
                setIsAnswered(false)
                setSelectedAnswer(null)
                setShowQuip(false)
              }
            }, 2000)
          }}
          isAnswered={isAnswered}
        />
      )
    }

    // If not a matching or sorting question, treat as standard question
    if (!('options' in currentQ) || !('answer' in currentQ)) {
      console.error('Invalid question type:', currentQ)
      return null
    }

    const standardQ = currentQ as StandardQuizQuestion
    return (
      <div className="w-full max-w-md mx-auto space-y-2">
        {standardQ.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={isAnswered}
            className={`w-full py-2 text-base md:text-lg font-semibold text-white rounded-full shadow-md transition-all
              ${isAnswered 
                ? standardQ.options[index] === standardQ.answer
                  ? 'bg-green-500'
                  : selectedAnswer === index
                    ? 'bg-red-500'
                    : 'bg-gray-400'
                : index === 0 ? 'bg-yellow-500 hover:bg-yellow-600'
                  : index === 1 ? 'bg-green-500 hover:bg-green-600'
                  : index === 2 ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-purple-500 hover:bg-purple-600'
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Header */}
      <div className="relative h-[15vh] w-full">
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
        {/* Background Image */}
        <Image
          src="/images/backgrounds/bg1.jpg"
          alt="Watercolor Background"
          fill
          className="object-cover"
          priority
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center px-4 py-2 space-y-3" style={{ backgroundColor: 'rgb(252, 250, 245, 0.8)' }}>
          {/* Progress */}
          <MagicProgressBar
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
          />

          {/* Question Box */}
          {!questions[currentQuestion].hideQuestionBox && questions[currentQuestion].question && (
            <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-3 max-w-lg w-full mx-auto">
              <h1 className="text-lg md:text-xl font-bold text-gray-900 text-center">
                {questions[currentQuestion].question}
              </h1>
            </div>
          )}

          {/* Question Content */}
          {renderQuestion()}

          {/* Quip Display */}
          {showQuip && (
            <div className="bg-white/90 rounded-xl p-3 max-w-md w-full text-center text-lg font-bold animate-bounce">
              {quip}
            </div>
          )}

          {/* Mr. Fluff Butt Image */}
          <div className="w-24 h-24 relative">
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
        </div>
      </div>
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
