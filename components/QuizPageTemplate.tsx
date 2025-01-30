'use client'

import Image from 'next/image'
import Link from 'next/link'

interface QuizPageTemplateProps {
  title: string
  subtitle: string
  readStoryLink?: string
  beginQuizLink?: string
  customButtons?: React.ReactNode
}

export default function QuizPageTemplate({
  title,
  subtitle,
  readStoryLink = '/story',
  beginQuizLink = '/quiz',
  customButtons,
}: QuizPageTemplateProps) {
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
        <div className="relative z-10 flex flex-col items-center px-4 py-4 md:px-6 md:py-8 space-y-4 md:space-y-8">
          {/* Title Box */}
          <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-4 md:p-6 max-w-lg w-full mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
              {title}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="bg-white rounded-lg p-3 md:p-4 max-w-md w-full shadow-md mx-auto">
            <h2 className="text-xl md:text-3xl text-gray-800 text-center">
              {subtitle}
            </h2>
          </div>

          {/* Mr. Fluff Butt Image */}
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

          {/* Buttons */}
          {customButtons ? (
            customButtons
          ) : (
            <div className="flex flex-col w-full max-w-md gap-3 md:gap-4 mt-4 md:mt-8 px-4 mx-auto">
              <Link href={readStoryLink}>
                <button className="w-full py-3 md:py-4 text-lg md:text-xl font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition-all">
                  Read the Story
                </button>
              </Link>
              <Link href={beginQuizLink}>
                <button className="w-full py-3 md:py-4 text-lg md:text-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all
                               animate-[pulse_2s_ease-in-out_infinite] hover:animate-none">
                  Begin Your Adventure
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 