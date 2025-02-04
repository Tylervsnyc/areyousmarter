'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { trackUserProgress } from '@/app/utils/analytics'

interface NameInputTemplateProps {
  chapterNumber: string | number
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

export default function NameInputTemplate({ chapterNumber }: NameInputTemplateProps) {
  const [name, setName] = useState('')
  const router = useRouter()
  const [randomQuip] = useState(() => 
    nameQuips[Math.floor(Math.random() * nameQuips.length)]
  )

  useEffect(() => {
    // Track page view when component mounts
    trackUserProgress('view_name_page', chapterNumber.toString())
  }, [chapterNumber])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      // Track name submission
      trackUserProgress('submit_name', chapterNumber.toString())
      router.push(`/quiz/${chapterNumber}/age?name=${encodeURIComponent(name.trim())}`)
    }
  }

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Header */}
      <div className="relative h-[20vh] w-full">
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
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 space-y-4" style={{ backgroundColor: 'rgb(252, 250, 245, 0.8)' }}>
          {/* Title Box */}
          <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-3 md:p-4 max-w-lg w-full mx-auto">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center">
              What&apos;s Your Name?
            </h1>
          </div>

          {/* Name Input Form */}
          <div className="bg-white/90 rounded-xl p-6 max-w-md w-full mx-auto shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label htmlFor="name" className="block text-xl text-gray-700 text-center">
                  {randomQuip}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-lg border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Your name here..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-2 md:py-3 text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all animate-[pulse_2s_ease-in-out_infinite] hover:animate-none"
              >
                Continue to Age Selection
              </button>
            </form>
          </div>

          {/* Mr. Fluffbutt Image */}
          <div className="w-32 h-32 relative animate-[bounce_3s_ease-in-out_infinite] mx-auto">
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
  )
} 