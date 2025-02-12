'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getChapter } from '../data'
import { DuoTemplateButton } from '../components/DuoTemplateButton'
import DuoHeader from '../components/DuoHeader'
import { duoFontStyles, duoDefaultTheme } from '../styles'

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapter = getChapter(params.id)
  
  if (!chapter) {
    notFound()
  }

  // Prevent scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

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
                className="rounded-xl border-4 p-6 sm:p-8 mb-12"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text">
                  {chapter.title}
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center mt-4 title-text">
                  {chapter.subtitle}
                </h2>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-md mx-auto px-4">
                <Link href={chapter.readStoryLink} className="block">
                  <DuoTemplateButton variant="blue">
                    Read the Story
                  </DuoTemplateButton>
                </Link>
                <Link href={`/new-quiz/${params.id}/name`} className="block">
                  <DuoTemplateButton variant="green">
                    Begin Quiz
                  </DuoTemplateButton>
                </Link>
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