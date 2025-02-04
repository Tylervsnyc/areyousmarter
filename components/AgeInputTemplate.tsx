'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface AgeInputTemplateProps {
  chapterNumber: string | number
}

const ageQuips = [
  "How old are you, {name}?",
  "Your age, {name}?",
  "{name}, how many candles?",
  "Age please, {name}!",
  "{name}, how old?",
  "Tell me your age, {name}!",
  "Birthday number, {name}?",
  "{name}, years please!",
  "How young are you, {name}?",
  "Your years, {name}?"
]

function AgeInputContent({ chapterNumber }: AgeInputTemplateProps) {
  const [message, setMessage] = useState('')
  const [goofCount, setGoofCount] = useState(0)
  const router = useRouter()
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''
  
  const [randomQuip] = useState(() => {
    const quip = ageQuips[Math.floor(Math.random() * ageQuips.length)]
    return quip.replace('{name}', name)
  })

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
              How Old Are You?
            </h1>
          </div>

          {/* Age Selection Buttons */}
          <div className="bg-white/90 rounded-xl p-6 max-w-md w-full mx-auto shadow-lg">
            <div className="space-y-4">
              <div className="text-xl text-gray-700 text-center mb-6">
                {randomQuip}
              </div>

              {message && (
                <div className="text-center font-medium text-lg text-blue-600 mb-4">
                  {message}
                </div>
              )}

              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => handleAgeSelect('baby')}
                  className="w-full py-2 md:py-3 text-base md:text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition-all"
                >
                  I&apos;m a Baby WAH-WAH
                </button>
                <button
                  onClick={() => handleAgeSelect('6-7')}
                  className="w-full py-2 md:py-3 text-base md:text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all"
                >
                  6-7 Years Old
                </button>
                <button
                  onClick={() => handleAgeSelect('8-9')}
                  className="w-full py-2 md:py-3 text-base md:text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all"
                >
                  8-9 Years Old
                </button>
                <button
                  onClick={() => handleAgeSelect('ship')}
                  className="w-full py-2 md:py-3 text-base md:text-lg font-semibold bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg transition-all"
                >
                  I&apos;m an Old Old Wooden Ship
                </button>
              </div>
            </div>
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

export default function AgeInputTemplate(props: AgeInputTemplateProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AgeInputContent {...props} />
    </Suspense>
  )
} 
