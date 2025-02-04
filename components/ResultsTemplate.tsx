'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Certificate from './Certificate'
import { trackUserProgress, trackCertificate } from '@/app/utils/analytics'
import { useRouter } from 'next/navigation'

interface ResultsTemplateProps {
  chapterNumber: string
}

const scoreMessages = {
  low: [
    "Well, at least you didn't try to bark your answers.",
    "Perhaps we should start with counting kibble pieces?"
  ],
  medium: [
    "You're showing potential, tiny human. Keep practicing!",
    "Not completely hopeless. My training is working... slowly."
  ],
  high: [
    "Now you're thinking with your whiskers! Almost purr-fect!",
    "You're earning your place in the royal court of mathematics!"
  ],
  perfect: [
    "I hereby grant you the title of Royal Mathematical Scholar!",
    "You've proven yourself worthy of the Golden Whisker Award!"
  ]
}

const progressMessages = [
  "Hudson now has $72 in his bike fund! Only $428 to go before he can stop bothering me about that two-wheeled contraption.",
  "At this rate, Hudson might actually get that bike before I use up all nine lives!"
]

function ResultsContent({ chapterNumber }: ResultsTemplateProps) {
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get('score') || '0')
  const name = searchParams.get('name') || ''
  const type = searchParams.get('type') || 'easy'
  const router = useRouter()

  useEffect(() => {
    const audio = new Audio(score === 10 ? '/sounds/perfect.mp3' : '/sounds/applause.mp3')
    audio.play().catch(error => console.log('Error playing sound:', error))
    
    trackUserProgress('results_view', chapterNumber)
    if (score >= 8) {
      trackCertificate(score, chapterNumber)
    }
  }, [score, chapterNumber])

  const handleTryAgain = () => {
    trackUserProgress('try_again_clicked', chapterNumber)
    router.push(`/quiz/${chapterNumber}/age`)
  }

  const handleHomeClick = () => {
    trackUserProgress('return_home_clicked', chapterNumber)
    router.push('/')
  }

  const getScoreCategory = (score: number) => {
    if (score <= 2) return 'low'
    if (score <= 5) return 'medium'
    if (score <= 8) return 'high'
    return 'perfect'
  }

  const scoreCategory = getScoreCategory(score)
  const messages = scoreMessages[scoreCategory]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)]
  const progressMessage = progressMessages[Math.floor(Math.random() * progressMessages.length)]

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
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 space-y-4" style={{ backgroundColor: 'rgb(252, 250, 245, 0.8)' }}>
          {/* Score Box */}
          <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-4 md:p-6 max-w-lg w-full mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Quiz Complete!
            </h1>
            <div className="text-xl md:text-2xl text-center">
              {name}, you got <span className="font-bold text-blue-600">{score} out of 10</span> questions correct!
            </div>
          </div>

          {/* Message Box */}
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-md mx-auto">
            <div className="text-xl text-gray-700 text-center space-y-4">
              <p>{randomMessage}</p>
              <p className="text-blue-600">{progressMessage}</p>
            </div>
          </div>

          {/* Certificate Notice */}
          {score === 10 && (
            <div className="space-y-6 w-full">
              <div className="bg-yellow-100 rounded-lg p-6 max-w-md w-full shadow-md mx-auto border-2 border-yellow-400">
                <div className="text-xl text-gray-700 text-center">
                  🎉 Congratulations! You've earned the Royal Mathematical Scholar Certificate! 🎉
                </div>
              </div>
              <Certificate 
                studentName={name}
                chapterNumber={chapterNumber}
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col w-full max-w-md gap-3 md:gap-4 mt-4 md:mt-8 px-4 mx-auto">
            <button
              onClick={handleTryAgain}
              className="w-full py-3 md:py-4 text-lg md:text-xl font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all"
            >
              Try Again
            </button>
            <button
              onClick={handleHomeClick}
              className="w-full py-3 md:py-4 text-lg md:text-xl font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition-all"
            >
              Return Home
            </button>
          </div>

          {/* Mr. Fluffbutt Image */}
          <div className="w-36 h-36 md:w-64 md:h-64 relative animate-[bounce_3s_ease-in-out_infinite] mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-yellow-400 overflow-hidden">
              <Image
                src="/images/mrfb.jpg"
                alt="Mr. Fluffbutt"
                fill
                className="object-cover animate-[wiggle_2s_ease-in-out_infinite]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ResultsTemplate(props: ResultsTemplateProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent {...props} />
    </Suspense>
  )
} 