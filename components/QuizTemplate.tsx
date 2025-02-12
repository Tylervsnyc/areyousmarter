'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import MagicProgressBar from './MagicProgressBar'
import { trackUserProgress, trackQuestionAnswer } from '@/app/utils/analytics'
import { useButtonSound } from '@/app/hooks/useButtonSound'

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

interface FeedbackPopupProps {
  isCorrect: boolean
  message: string
  explanation?: string
  onContinue: () => void
}

function FeedbackPopup({ isCorrect, message, explanation, onContinue }: FeedbackPopupProps) {
  const playButtonSound = useButtonSound()
  
  const handleClick = () => {
    playButtonSound()
    onContinue()
  }

  return (
    <div className="fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-out z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-auto shadow-lg border-4 border-yellow-400">
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
              {isCorrect ? 'Purr-fect!' : 'Meow No!'}
            </div>
            <div className="text-lg text-gray-700">
              {message}
            </div>
            {explanation && (
              <div className="text-sm text-gray-600 mt-2">
                {explanation}
              </div>
            )}
          </div>
        </div>
        <button
          onClick={handleClick}
          className="w-full py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-xl mt-6 transition-colors button-3d border-b-4 border-blue-600"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

function QuizContent({ questions, chapterNumber, quizType }: QuizTemplateProps) {
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
    trackUserProgress('quiz_started', chapterNumber.toString())
  }, [chapterNumber])

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
      chapterNumber.toString()
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
      trackUserProgress('quiz_completed', chapterNumber.toString())
      // Quiz completed, navigate to results
      router.push(`/quiz/${chapterNumber}/results?name=${encodeURIComponent(name)}&score=${finalScore}&type=${quizType}`)
    } else {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  const renderQuestion = () => {
    const currentQ = questions[currentQuestion]
    
    if (currentQ.type === 'matching' || currentQ.type === 'sorting') {
      const CustomComponent = currentQ.component
      return (
        <CustomComponent
          {...currentQ.componentProps}
          onAnswer={(isCorrect: boolean) => {
            if (showFeedback) return
            setIsAnswerCorrect(isCorrect)
            
            if (isCorrect) {
              setScore(score + 1)
              playSound(true)
            } else {
              playSound(false)
            }
            
            const newQuip = getRandomQuip(isCorrect)
            setFeedbackMessage(newQuip)
            setShowFeedback(true)
          }}
          isAnswered={showFeedback}
        />
      )
    }

    // If not a matching or sorting question, treat as standard question
    if (!('options' in currentQ) || !('answer' in currentQ)) {
      console.error('Invalid question type:', currentQ)
      return null
    }

    return (
      <div className="w-full max-w-md mx-auto space-y-2">
        {/* Answer Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          {currentQ.options.map((option, index) => {
            // Determine button color based on index
            const buttonColors = showFeedback && index === selectedAnswer
              ? isAnswerCorrect
                ? 'bg-emerald-400 hover:bg-emerald-500 border-b-4 border-emerald-500'
                : 'bg-rose-400 hover:bg-rose-500 border-b-4 border-rose-500'
              : index % 5 === 0
                ? 'bg-rose-400 hover:bg-rose-500 border-b-4 border-rose-500'
                : index % 5 === 1
                  ? 'bg-emerald-400 hover:bg-emerald-500 border-b-4 border-emerald-500'
                  : index % 5 === 2
                    ? 'bg-amber-400 hover:bg-amber-500 border-b-4 border-amber-500'
                    : index % 5 === 3
                      ? 'bg-blue-500 hover:bg-blue-600 border-b-4 border-blue-600'
                      : 'bg-purple-500 hover:bg-purple-600 border-b-4 border-purple-600';

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showFeedback}
                className={`
                  w-full py-4 px-6 text-lg font-bold rounded-xl button-3d
                  ${buttonColors}
                  text-white transition-all
                `}
              >
                {option}
              </button>
            );
          })}
        </div>
        
        {/* Feedback Popup */}
        {showFeedback && (
          <FeedbackPopup
            isCorrect={isAnswerCorrect}
            message={feedbackMessage}
            explanation={currentQ.explanation}
            onContinue={handleContinue}
          />
        )}
      </div>
    )
  }

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{`
        .button-3d {
          position: relative;
          transform: translateY(0);
          transition: all 0.2s;
        }

        .button-3d:active {
          transform: translateY(4px);
        }

        .button-3d:active .border-b-4 {
          border-bottom-width: 0;
        }

        .button-3d:hover {
          filter: brightness(1.1);
        }

        .title-text {
          font-family: din-round, sans-serif;
          letter-spacing: 0.5px;
        }

        .blue-3d:after {
          background-color: rgb(37, 99, 235);
        }

        .green-3d:after {
          background-color: rgb(34, 197, 94);
        }
      `}</style>

      {/* Header - 15vh */}
      <div className="relative h-[12vh] w-full flex-shrink-0">
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

      {/* Main Content - 85vh */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: '#FFFDD0' }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4 pt-6">
            {/* Question Content */}
            <div className="w-full max-w-lg mx-auto">
              {/* Question Box */}
              {!questions[currentQuestion].hideQuestionBox && (
                <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-4 mb-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 text-center title-text">
                    {questions[currentQuestion].question}
                  </h2>
                </div>
              )}

              {/* Question Content */}
              {renderQuestion()}
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
