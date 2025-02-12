'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { trackUserProgress } from '@/app/utils/analytics'

interface NameInputTemplateProps {
  /**
   * The chapter ID (used for routing and analytics)
   */
  id: string

  /**
   * @deprecated Use id instead
   * The chapter number (used for analytics and routing)
   */
  chapterNumber?: string | number
}

const nameQuips = [
  "Your name, if you please?",
  "Who dares challenge me?",
  "And you are...?",
  "State your name, young one.",
  "Tell me what to call you.",
  "What's your name, brave one?",
  "Your name, challenger?",
  "Who stands before me?",
  "Name, please!",
  "You are called...?"
]

export default function NameInputTemplate({
  id,
  chapterNumber
}: NameInputTemplateProps) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [randomQuip] = useState(() => 
    nameQuips[Math.floor(Math.random() * nameQuips.length)]
  )

  // Support both id and chapterNumber for backwards compatibility
  const chapterId = id || chapterNumber?.toString()

  if (!chapterId) {
    console.warn('NameInputTemplate: Either id or chapterNumber must be provided')
    return null
  }

  useEffect(() => {
    // Track page view when component mounts
    trackUserProgress('view_name_page', chapterId)
  }, [chapterId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim()) {
      setError('Please enter your name')
      return
    }

    // Track name submission
    trackUserProgress('submit_name', chapterId)

    // Navigate to age selection
    router.push(`/quiz/${chapterId}/age?name=${encodeURIComponent(name.trim())}`)
  }

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{`
        .button-3d {
          position: relative;
          z-index: 0;
          transform: translateZ(0);
          transition: all 0.2s;
          font-family: din-round, sans-serif;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .title-text {
          font-family: din-round, sans-serif;
          letter-spacing: 0.5px;
        }

        .button-3d:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          top: 0;
          z-index: -1;
          border-radius: 12px;
          transition: all 0.2s;
          background-color: rgb(29, 78, 216);
        }

        .button-3d:active {
          transform: translateY(4px);
        }

        .button-3d:active:after {
          bottom: 0;
        }

        .button-3d:hover {
          filter: brightness(1.1);
        }
      `}</style>

      {/* Header - 15vh */}
      <div className="relative h-[15vh] w-full flex-shrink-0">
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

      {/* Main Content - 85vh */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: '#FFFDD0' }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Title Box */}
              <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-6 sm:p-8 mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text">
                  {randomQuip}
                </h1>
              </div>

              {/* Name Input Form */}
              <div className="w-full max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 text-lg border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent title-text"
                    placeholder="Type your name here..."
                    required
                  />
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl text-lg button-3d border-b-4 border-blue-700 hover:bg-blue-700 transition-all"
                  >
                    Continue to Age Selection
                  </button>
                </form>
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