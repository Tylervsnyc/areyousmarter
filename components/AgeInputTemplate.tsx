'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface AgeInputTemplateProps {
  chapterNumber: string | number
}

function AgeInputContent({ chapterNumber }: AgeInputTemplateProps) {
  const [message, setMessage] = useState('')
  const [goofCount, setGoofCount] = useState(0)
  const router = useRouter()
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''

  const handleAgeSelect = (ageRange: string) => {
    if (ageRange === 'baby' || ageRange === 'ship') {
      setGoofCount(prev => prev + 1)
      
      if (goofCount >= 1) {
        setMessage("Okay, okay, funny person! Please select your real age range now! 😄")
        return
      }

      if (ageRange === 'baby') {
        setMessage("Wow, a typing baby! That's incredible! 🍼 Try again!")
      } else {
        setMessage("An ancient vessel using a computer? Now that's something! 🚢 Try again!")
      }
      return
    }

    // Route to the appropriate quiz page based on age
    if (ageRange === '6-7') {
      router.push(`/quiz/${chapterNumber}/6-7?name=${encodeURIComponent(name)}&version=easy`)
    } else if (ageRange === '8-9') {
      router.push(`/quiz/${chapterNumber}/8-9?name=${encodeURIComponent(name)}&version=hard`)
    }
  }

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
              How Old Are You?
            </h1>
          </div>

          {/* Age Selection Buttons */}
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-md mx-auto">
            <div className="space-y-4">
              <div className="text-xl text-gray-700 text-center mb-6">
                Select your age range to continue
              </div>

              {message && (
                <div className="text-center font-medium text-lg text-blue-600 mb-4">
                  {message}
                </div>
              )}

              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => handleAgeSelect('baby')}
                  className="w-full py-4 text-lg md:text-xl font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition-all"
                >
                  I&apos;m a Baby WAH-WAH
                </button>
                <button
                  onClick={() => handleAgeSelect('6-7')}
                  className="w-full py-4 text-lg md:text-xl font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all"
                >
                  6-7 Years Old
                </button>
                <button
                  onClick={() => handleAgeSelect('8-9')}
                  className="w-full py-4 text-lg md:text-xl font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all"
                >
                  8-9 Years Old
                </button>
                <button
                  onClick={() => handleAgeSelect('ship')}
                  className="w-full py-4 text-lg md:text-xl font-semibold bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg transition-all"
                >
                  I&apos;m an Old Old Wooden Ship
                </button>
              </div>
            </div>
          </div>

          {/* Mr. Fluffbutt Image */}
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
        </div>
      </div>
    </div>
  )
}

export default function AgeInputTemplate(props: AgeInputTemplateProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AgeInputContent {...props} />
    </Suspense>
  )
} 
