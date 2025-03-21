'use client'

import Link from 'next/link'
import Image from 'next/image'
import chapters from '../data/combined-chapters'
import type { ChapterData } from '../types'
import { DuoTemplateButton } from '../components/DuoTemplateButton'
import DuoHeader from '../components/DuoHeader'
import { duoFontStyles, duoDefaultTheme } from '../styles'

const buttonVariants = ['feather', 'macaw', 'lilac', 'bee', 'emerald'] as const
type ButtonVariant = typeof buttonVariants[number]

export default function ChaptersPage() {
  // Convert chapters object to array and sort by ID
  const chapterList = (chapters ? Object.values(chapters) : []).sort((a: ChapterData, b: ChapterData) => 
    a.id.localeCompare(b.id, undefined, { numeric: true })
  )

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{duoFontStyles}</style>

      {/* Header */}
      <DuoHeader />

      {/* Main Content */}
      <div className="flex-1 relative">
        <div className="absolute inset-0" style={{ backgroundColor: duoDefaultTheme.backgroundColor }}>
          <div className="h-full flex flex-col px-4 overflow-y-auto pb-8">
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
                  Are You Smarter Than Mr. Fluffbutt?
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 text-center">
                  Choose a chapter to begin your adventure! 🐱
                </p>
              </div>

              {/* Chapter Links */}
              <div className="w-full max-w-md mx-auto space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {chapterList.map((chapter, index) => (
                    <Link key={chapter.id} href={`/new-quiz/${chapter.id}`}>
                      <DuoTemplateButton 
                        variant={buttonVariants[index % buttonVariants.length]}
                      >
                        <div className="text-center w-full">
                          <div className="font-bold text-lg">Chapter {index + 1}</div>
                          <div className="text-base mt-1">{chapter.subtitle}</div>
                        </div>
                      </DuoTemplateButton>
                    </Link>
                  ))}
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
    </div>
  )
} 