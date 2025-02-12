'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { duoFontStyles, duoDefaultTheme } from '../styles'
import { DuoTemplateButton } from '../buttons/page'
import DuoHeader from './DuoHeader'

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
  const router = useRouter()

  useEffect(() => {
    const audio = new Audio(score === 10 ? '/sounds/perfect.mp3' : '/sounds/applause.mp3')
    audio.play().catch(error => console.log('Error playing sound:', error))
  }, [score])

  const handleTryAgain = () => {
    router.push(`/quiz/${chapterNumber}/age?name=${encodeURIComponent(name)}`)
  }

  const handleHomeClick = () => {
    router.push('/')
  }

  const getScoreCategory = (score: number) => {
    if (score <= 2) return 'low'
    if (score <= 5) return 'medium'
    if (score <= 8) return 'high'
    return 'perfect'
  }

  const scoreCategory = getScoreCategory(score)
  const messages = scoreMessages[scoreCategory as keyof typeof scoreMessages]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)]
  const progressMessage = progressMessages[Math.floor(Math.random() * progressMessages.length)]

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{duoFontStyles}</style>

      {/* Header */}
      <DuoHeader />

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: duoDefaultTheme.backgroundColor }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Score Box */}
              <div 
                className="rounded-xl border-4 p-6 sm:p-8 mb-8"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text">
                  Quiz Complete!
                </h1>
                <div className="text-xl md:text-2xl text-center mt-4">
                  {name}, you got <span className="font-bold text-blue-600">{score} out of 10</span> questions correct!
                </div>
              </div>

              {/* Message Box */}
              <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-4 mb-8">
                <div className="text-xl text-gray-700 text-center space-y-4">
                  <p>{randomMessage}</p>
                  <p className="text-blue-600">{progressMessage}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col gap-4 w-full max-w-md mx-auto px-4">
                <DuoTemplateButton
                  variant="blue"
                  onClick={handleTryAgain}
                >
                  Try Again
                </DuoTemplateButton>
                <DuoTemplateButton
                  variant="yellow"
                  onClick={handleHomeClick}
                >
                  Return Home
                </DuoTemplateButton>
              </div>

              {/* Mr. Fluffbutt Image */}
              <div className="w-32 h-32 relative animate-[bounce_3s_ease-in-out_infinite] mx-auto mt-8">
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