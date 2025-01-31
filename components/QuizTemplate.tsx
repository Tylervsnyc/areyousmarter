'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import QuizProgress from './QuizProgress'

interface QuizQuestion {
  question: string
  options: string[]
  answer: string
}

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
  }, [])

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
    
    const isCorrect = questions[currentQuestion].options[selectedIndex] === questions[currentQuestion].answer
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
        // Quiz completed, navigate to results
        router.push(`/quiz/${chapterNumber}/results?name=${encodeURIComponent(name)}&score=${score + (isCorrect ? 1 : 0)}&type=${quizType}`)
      } else {
        setCurrentQuestion(currentQuestion + 1)
        setIsAnswered(false)
        setSelectedAnswer(null)
        setShowQuip(false)
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Header */}
      <div className="relative h-32 w-full">
        <Image
          src="/images/header.jpg"
          alt="Header Background"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Logo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Link href="https://www.learnthroughstories.com/">
            <Image
              src="/images/logo.png"
              alt="Learn Through Stories"
              width={120}
              height={30}
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
              width={100}
              height={25}
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
        <div className="relative z-10 flex flex-col items-center px-4 py-4 md:px-6 md:py-8 space-y-4 md:space-y-8">
          {/* Progress */}
          <QuizProgress
            currentQuestion={currentQuestion + 1}
            correctAnswers={score}
            totalQuestions={questions.length}
            isCorrectAnimation={isAnswered && questions[currentQuestion].options[selectedAnswer!] === questions[currentQuestion].answer}
          />

          {/* Question Box */}
          <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-4 md:p-6 max-w-lg w-full mx-auto relative">
            {/* Mr. Fluff Butt Image */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-yellow-400 overflow-hidden hidden md:block">
              <div className="w-full h-full transform hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/mrfb.jpg"
                  alt="Mr. Fluff Butt"
                  fill
                  className="object-cover animate-[wiggle_3s_ease-in-out_infinite]"
                  priority
                />
              </div>
            </div>
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center">
              {questions[currentQuestion].question}
            </h1>
          </div>

          {/* Answer Options */}
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-md mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={`w-full py-4 text-lg md:text-xl font-semibold text-white rounded-full shadow-lg transition-all
                    ${isAnswered 
                      ? questions[currentQuestion].options[index] === questions[currentQuestion].answer
                        ? 'bg-green-500'
                        : selectedAnswer === index
                          ? 'bg-red-500'
                          : 'bg-gray-400'
                      : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Quip Display */}
          {showQuip && (
            <div className="bg-white/90 rounded-xl p-4 max-w-md w-full text-center text-xl font-bold animate-bounce">
              {quip}
            </div>
          )}
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
