'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { DuoTemplateButton } from './DuoTemplateButton'
import DuoHeader from './DuoHeader'
import { duoDefaultTheme } from '../styles'
import { playButtonPress, playPerfectSound } from '../utils/sounds'
import type { ChapterData } from '../types'
import { getNextChapterId } from '../data/combined-chapters'
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics'

// Dynamically import react-confetti to avoid SSR issues
const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

interface ResultsPageProps {
  chapter: ChapterData
  score: number
  name: string
  age: string
}

export function ResultsPage({ chapter, score, name, age }: ResultsPageProps) {
  const router = useRouter()
  const [showConfetti, setShowConfetti] = useState(false)
  const perfectSoundRef = useRef<HTMLAudioElement | null>(null)

  const nextChapterId = getNextChapterId(chapter.id)

  // Prevent scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Calculate total questions (10 questions per age group)
  const totalQuestions = 10
  const percentage = Math.round((score / totalQuestions) * 100)
  const isPerfectScore = percentage === 100

  // Control confetti display and perfect sound
  useEffect(() => {
    if (isPerfectScore) {
      setShowConfetti(true)
      // Play perfect sound
      perfectSoundRef.current = playPerfectSound()
      perfectSoundRef.current.play().catch(console.error)

      const timer = setTimeout(() => {
        setShowConfetti(false)
        // Stop the perfect sound
        if (perfectSoundRef.current) {
          perfectSoundRef.current.pause()
          perfectSoundRef.current.currentTime = 0
        }
      }, 5000) // 5 seconds

      return () => {
        clearTimeout(timer)
        // Cleanup sound on unmount
        if (perfectSoundRef.current) {
          perfectSoundRef.current.pause()
          perfectSoundRef.current.currentTime = 0
        }
      }
    }
  }, [isPerfectScore])

  const getMessage = () => {
    if (percentage === 100) {
      return "PURR-FECT SCORE! You're almost as smart as me... almost!"
    } else if (percentage >= 80) {
      return "Look at you go! Just a whisker away from perfect!"
    } else if (percentage >= 60) {
      return "Not bad! But I know you can do even better!"
    } else {
      return "Oops! Let's sharpen those counting skills and try again!"
    }
  }

  const handleTryAgain = () => {
    playButtonPress()
    trackEvent(ANALYTICS_EVENTS.TRY_AGAIN, {
      chapterId: chapter.id,
      previousScore: score,
      age,
      name
    })
  }

  const handleNextChapter = () => {
    playButtonPress()
    if (nextChapterId) {
      trackEvent(ANALYTICS_EVENTS.NEXT_CHAPTER, {
        chapterId: chapter.id,
        fromChapterId: chapter.id,
        toChapterId: nextChapterId,
        previousScore: score,
        age,
        name
      })
    }
  }

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      {showConfetti && <ReactConfetti />}

      {/* Header */}
      <DuoHeader />

      {/* Main Content - 85vh */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: duoDefaultTheme.backgroundColor }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Score Display */}
              <div 
                className="rounded-xl border-4 p-6 sm:p-8 mb-8"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center font-din-round tracking-wider mb-4">
                  Quiz Results
                </h1>
                <div className="flex justify-center items-center gap-4 mb-6">
                  <div className={`text-4xl sm:text-5xl md:text-6xl font-bold ${isPerfectScore ? 'text-yellow-500' : 'text-blue-600'}`}>
                    {score}
                  </div>
                  <div className="text-2xl sm:text-3xl text-gray-600">/</div>
                  <div className="text-2xl sm:text-3xl text-gray-600">
                    {totalQuestions}
                  </div>
                </div>
                <p className="text-xl sm:text-2xl text-gray-700 text-center font-din-round tracking-wide">
                  {getMessage()}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="w-full max-w-md mx-auto space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {/* Try Again button */}
                  <Link 
                    href={`/new-quiz/${chapter.id}/quiz?age=${age}&name=${encodeURIComponent(name)}`}
                    onClick={handleTryAgain}
                  >
                    <DuoTemplateButton variant="macaw">
                      Try Again
                    </DuoTemplateButton>
                  </Link>

                  {/* Next Chapter button - only show if there is a next chapter */}
                  {nextChapterId && (
                    <Link 
                      href={`/new-quiz/${nextChapterId}`}
                      onClick={handleNextChapter}
                    >
                      <DuoTemplateButton variant="feather">
                        Next Chapter
                      </DuoTemplateButton>
                    </Link>
                  )}
                </div>
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