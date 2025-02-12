'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { duoFontStyles, duoDefaultTheme } from './styles'
import { DuoTemplateButton } from './buttons/page'
import DuoHeader from './components/DuoHeader'

interface DuoTemplateProps {
  title?: string
  subtitle?: string
  readStoryLink?: string
  beginQuizLink?: string
  chapterNumber?: number
  theme?: {
    backgroundColor?: string
    titleBoxBorderColor?: string
    titleBoxBackgroundColor?: string
  }
}

export default function DuoTemplate() {
  const [settings] = useState<DuoTemplateProps>({
    title: "Are You Smarter Than Mr. Fluffbutt?",
    subtitle: "Chapter 1: Help Me Get This Bike!",
    readStoryLink: "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-1",
    beginQuizLink: "/test/duo-template/name",
    chapterNumber: 1,
    theme: duoDefaultTheme
  })

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
        <div className="absolute inset-0" style={{ backgroundColor: settings.theme?.backgroundColor }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Title Box */}
              <div 
                className="rounded-xl border-4 p-6 sm:p-8 mb-12"
                style={{
                  borderColor: settings.theme?.titleBoxBorderColor,
                  backgroundColor: settings.theme?.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text">
                  {settings.title}
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center mt-4 title-text">
                  {settings.subtitle}
                </h2>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-md mx-auto px-4">
                <Link href={settings.readStoryLink || '#'} className="block">
                  <DuoTemplateButton variant="blue">
                    Read the Story
                  </DuoTemplateButton>
                </Link>
                <Link href={settings.beginQuizLink || '#'} className="block">
                  <DuoTemplateButton variant="green">
                    Play the Game
                  </DuoTemplateButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 