'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { trackUserProgress } from '@/app/utils/analytics'

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
  const router = useRouter()

  const handleStartQuiz = () => {
    // Extract chapter number from beginQuizLink (e.g., "/quiz/1/name" -> "1")
    const chapter = beginQuizLink.split('/')[2]
    trackUserProgress('start_quiz', chapter)
    router.push(beginQuizLink)
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Header - Reduced height */}
      <div className="relative h-20 w-full">
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
      <div className="flex-1 relative">
        {/* Background Image */}
        <Image
          src="/images/backgrounds/bg1.jpg"
          alt="Watercolor Background"
          fill
          className="object-cover"
          priority
        />

        {/* Content Overlay - Reduced padding and spacing */}
        <div className="relative z-10 flex flex-col items-center px-4 py-2 md:px-6 md:py-4 space-y-3 md:space-y-4">
          {/* Title Box - More compact */}
          <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-3 md:p-4 max-w-lg w-full mx-auto">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center">
              {title}
            </h1>
          </div>

          {/* Subtitle - More compact */}
          <div className="bg-white rounded-lg p-2 md:p-3 max-w-md w-full shadow-md mx-auto">
            <h2 className="text-lg md:text-2xl text-gray-800 text-center">
              {subtitle}
            </h2>
          </div>

          {/* Mr. Fluff Butt Image - Smaller on desktop */}
          <div className="w-32 h-32 md:w-48 md:h-48 relative animate-[bounce_3s_ease-in-out_infinite] mx-auto">
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

          {/* Buttons - More compact spacing */}
          {customButtons ? (
            customButtons
          ) : (
            <div className="flex flex-col w-full max-w-md gap-2 md:gap-3 mt-2 md:mt-4 px-4 mx-auto">
              <Link href={readStoryLink}>
                <button className="w-full py-2 md:py-3 text-base md:text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition-all">
                  Read the Story
                </button>
              </Link>
              <button 
                onClick={handleStartQuiz}
                className="w-full py-2 md:py-3 text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all animate-[pulse_2s_ease-in-out_infinite] hover:animate-none"
              >
                Play the Game
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 