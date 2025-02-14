'use client'

import Image from 'next/image'
import Link from 'next/link'
import { DuoTemplateButton } from '../components/DuoTemplateButton'
import DuoHeader from '../components/DuoHeader'
import { duoFontStyles } from '../styles'
import type { ChapterData } from '../types'
import { playButtonPress } from '../utils/sounds'

interface ChapterContentProps {
  chapter: ChapterData
  id: string
}

export default function ChapterContent({ chapter, id }: ChapterContentProps) {
  const handleButtonPress = () => {
    playButtonPress();
  };

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{duoFontStyles}</style>

      {/* Header */}
      <DuoHeader />

      {/* Main Content - 85vh */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-[#FFFFF4]">
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Title Box */}
              <div 
                className="rounded-xl border-4 p-6 sm:p-8 mb-12 bg-white/90 border-yellow-400"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text">
                  {chapter.title}
                </h1>
                <h2 className="text-lg sm:text-xl text-gray-700 text-center mt-4 title-text">
                  {chapter.subtitle}
                </h2>
              </div>

              {/* Buttons */}
              <div className="w-full max-w-md mx-auto space-y-4">
                <Link href={chapter.readStoryLink} target="_blank" className="block" onClick={handleButtonPress}>
                  <DuoTemplateButton variant="feather">
                    Read Story
                  </DuoTemplateButton>
                </Link>
                <Link href={`/new-quiz/${id}/name`} className="block" onClick={handleButtonPress}>
                  <DuoTemplateButton variant="macaw">
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