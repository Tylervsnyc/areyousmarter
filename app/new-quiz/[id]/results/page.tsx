'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getChapter, getNextChapter } from '../../data'
import { DuoTemplateButton } from '../../components/DuoTemplateButton'
import DuoHeader from '../../components/DuoHeader'
import { duoFontStyles, duoDefaultTheme } from '../../styles'

export default function ResultsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get('score') || '0')
  const name = searchParams.get('name') || ''
  const ageRange = searchParams.get('age') || ''

  const chapter = getChapter(params.id)
  if (!chapter) {
    notFound()
  }

  const nextChapterId = getNextChapter(params.id)

  // Prevent scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const totalQuestions = chapter.questions.length
  const percentage = Math.round((score / totalQuestions) * 100)

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

  const handleRetry = () => {
    router.push(`/new-quiz/${params.id}/quiz?name=${encodeURIComponent(name)}&age=${ageRange}`)
  }

  const handleNextChapter = () => {
    if (nextChapterId) {
      router.push(`/new-quiz/${nextChapterId}`)
    }
  }

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{duoFontStyles}</style>

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
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center title-text mb-4">
                  Quiz Results
                </h1>
                <div className="flex justify-center items-center gap-4 mb-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
                    {score}
                  </div>
                  <div className="text-2xl sm:text-3xl text-gray-600">/</div>
                  <div className="text-2xl sm:text-3xl text-gray-600">
                    {totalQuestions}
                  </div>
                </div>
                <p className="text-xl sm:text-2xl text-gray-700 text-center title-text">
                  {getMessage()}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                <DuoTemplateButton
                  variant="blue"
                  onClick={handleRetry}
                >
                  Try Again
                </DuoTemplateButton>

                {nextChapterId && (
                  <DuoTemplateButton
                    variant="green"
                    onClick={handleNextChapter}
                  >
                    Next Chapter
                  </DuoTemplateButton>
                )}

                <a 
                  href={chapter.readStoryLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <DuoTemplateButton variant="yellow">
                    Read the Story Again
                  </DuoTemplateButton>
                </a>
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