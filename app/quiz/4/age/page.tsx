'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const ageQuips = [
  "How old are you, tiny human?",
  "Your age, please!",
  "How many candles on your cake?",
  "Age please!",
  "How old?",
  "Tell me your age!",
  "Birthday number?",
  "Years please!",
  "How young are you?",
  "Your years?"
]

export default function AgeSelectionPage() {
  const [message, setMessage] = useState('')
  const [goofCount, setGoofCount] = useState(0)
  const router = useRouter()
  const [randomQuip] = useState(() => {
    return ageQuips[Math.floor(Math.random() * ageQuips.length)]
  })

  const handleAgeSelect = (ageRange: string) => {
    if (ageRange === 'baby' || ageRange === 'ship') {
      setGoofCount(prev => prev + 1)
      
      if (goofCount >= 1) {
        setMessage("Okay, okay, funny human! Please select your real age range now! 😄")
        return
      }

      if (ageRange === 'baby') {
        setMessage("A baby using a computer? That's incredible! 🍼 Try again!")
      } else {
        setMessage("An ancient vessel taking a quiz? Now that's something! 🚢 Try again!")
      }
      return
    }

    // Route to the appropriate quiz page
    router.push(`/quiz/4/${ageRange}`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
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
          {/* Title Box */}
          <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-2 sm:p-3 max-w-lg w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
              Select Your Age Group
            </h1>
          </div>

          {/* Message Display */}
          {message && (
            <div className="bg-white/90 rounded-xl border-4 border-blue-400 p-2 sm:p-3 max-w-lg w-full">
              <p className="text-lg sm:text-xl text-blue-600 text-center font-medium">
                {message}
              </p>
            </div>
          )}

          {/* Age Selection Buttons */}
          <div className="flex flex-col w-full max-w-md gap-3 px-4">
            <button
              onClick={() => handleAgeSelect('baby')}
              className="w-full py-2.5 text-base sm:text-lg font-semibold bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition-all"
            >
              I'm a Baby WAH-WAH! 👶
            </button>
            <button
              onClick={() => handleAgeSelect('4-5')}
              className="w-full py-2.5 text-base sm:text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all"
            >
              Ages 4-5
            </button>
            <button
              onClick={() => handleAgeSelect('6-7')}
              className="w-full py-2.5 text-base sm:text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition-all"
            >
              Ages 6-7
            </button>
            <button
              onClick={() => handleAgeSelect('8-9')}
              className="w-full py-2.5 text-base sm:text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all"
            >
              Ages 8-9
            </button>
            <button
              onClick={() => handleAgeSelect('ship')}
              className="w-full py-2.5 text-base sm:text-lg font-semibold bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg transition-all"
            >
              I'm an Ancient Wooden Ship! 🚢
            </button>
          </div>

          {/* Mr. Fluff Butt Image */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 relative animate-[bounce_3s_ease-in-out_infinite]">
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