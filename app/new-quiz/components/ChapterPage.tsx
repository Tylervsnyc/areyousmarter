'use client'

import type { ChapterData } from '../types'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { duoDefaultTheme, duoFontStyles } from '../styles'
import { DuoTemplateButton } from './DuoTemplateButton'
import DuoHeader from './DuoHeader'
import { playButtonPress } from '../utils/sounds'
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics'

interface ChapterPageProps {
  chapter: ChapterData
}

export function ChapterPage({ chapter }: ChapterPageProps) {
  // Track chapter view on mount
  useEffect(() => {
    trackEvent(ANALYTICS_EVENTS.CHAPTER_VIEW, {
      chapterId: chapter.id,
      title: chapter.title,
      subtitle: chapter.subtitle
    })
  }, [chapter])

  const handleButtonPress = () => {
    playButtonPress()
  }

  const handleQuizStart = () => {
    handleButtonPress()
    trackEvent(ANALYTICS_EVENTS.QUIZ_START, {
      chapterId: chapter.id
    })
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
              {/* Title Box */}
              <div 
                className="rounded-xl border-4 p-6 sm:p-8 mb-8"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text mb-2">
                  {chapter.title}
                </h1>
                <h2 className="text-xl sm:text-2xl text-gray-600 text-center title-text">
                  {chapter.subtitle}
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="w-full max-w-md mx-auto space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <Link href={chapter.readStoryLink} onClick={handleButtonPress}>
                    <DuoTemplateButton variant="feather">
                      Read Story
                    </DuoTemplateButton>
                  </Link>
                  <Link href={`/new-quiz/${chapter.id}/name`} onClick={handleQuizStart}>
                    <DuoTemplateButton variant="macaw">
                      Begin Quiz
                    </DuoTemplateButton>
                  </Link>
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