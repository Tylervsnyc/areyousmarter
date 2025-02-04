'use client'

import Image from 'next/image'
import Link from 'next/link'

interface QuizPageTemplateProps {
  title: string
  subtitle: string
  readStoryLink?: string
  beginQuizLink?: string
  customButtons?: React.ReactNode
  chapterNumber: number
}

export default function QuizPageTemplate({
  title,
  subtitle,
  readStoryLink = '/story',
  beginQuizLink = '/quiz',
  customButtons,
  chapterNumber,
}: QuizPageTemplateProps) {
  return (
    <div className="h-screen flex flex-col">
      {/* Header - reduced height */}
      <div className="relative h-[15vh] w-full">
        <Image
          src="/images/header.jpg"
          alt="Header Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Logo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Link href="https://www.learnthroughstories.com/">
            <Image
              src="/images/logo.png"
              alt="Learn Through Stories"
              width={100}
              height={25}
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
              width={80}
              height={20}
              priority
            />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative bg-[rgb(252,250,245,0.8)]">
        {/* Background Image */}
        <Image
          src="/images/backgrounds/bg1.jpg"
          alt="Watercolor Background"
          fill
          className="object-cover -z-10"
          priority
        />

        {/* Content Container */}
        <div className="h-full flex flex-col items-center justify-center gap-4 px-4 py-6">
          {/* Title Box - reduced padding and margin */}
          <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-2 sm:p-3 max-w-lg w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
              {title}
            </h1>
          </div>

          {/* Subtitle - reduced padding and margin */}
          <div className="bg-white/90 rounded-xl border-4 border-blue-600 p-2 sm:p-3 max-w-lg w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-800 text-center">
              {subtitle}
            </h2>
          </div>

          {/* Mr. Fluff Butt Image - adjusted size */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative animate-[bounce_3s_ease-in-out_infinite]">
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

          {/* Buttons - adjusted spacing */}
          {customButtons ? (
            customButtons
          ) : (
            <div className="flex flex-col w-full max-w-md gap-3 px-4">
              <Link href={readStoryLink} className="w-full">
                <button className="w-full py-2.5 text-base sm:text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition-all">
                  Read the Story
                </button>
              </Link>
              <Link href={beginQuizLink} className="w-full">
                <button className="w-full py-2.5 text-base sm:text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all
                               animate-[pulse_2s_ease-in-out_infinite] hover:animate-none">
                  Play the Game
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 