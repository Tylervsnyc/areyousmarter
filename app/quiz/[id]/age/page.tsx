'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { duoFontStyles, duoDefaultTheme } from '../../../test/duo-template/styles'
import { DuoButton } from '../../../test/duo-template/buttons/page'
import DuoHeader from '../../../test/duo-template/components/DuoHeader'

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

export default function AgePage({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState('')
  const [goofCount, setGoofCount] = useState(0)
  const [quip, setQuip] = useState(ageQuips[0])
  const router = useRouter()
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''

  // Set random quip after initial client-side render
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * ageQuips.length)
    setQuip(ageQuips[randomIndex])
  }, [])

  // Prevent scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

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

    router.push(`/quiz/${params.id}/quiz?age=${ageRange}&name=${encodeURIComponent(name)}`)
  }

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{duoFontStyles}</style>

      {/* Header */}
      <DuoHeader />

      {/* Main Content - 85vh */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: duoDefaultTheme.backgroundColor }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Title Box */}
              <div 
                className="rounded-xl border-4 p-6 sm:p-8 mb-8"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text">
                  {quip}
                </h1>
              </div>

              {/* Message Display */}
              {message && (
                <div className="bg-white/90 rounded-xl border-4 border-blue-400 p-4 mb-8">
                  <p className="text-lg sm:text-xl text-blue-600 text-center font-medium title-text">
                    {message}
                  </p>
                </div>
              )}

              {/* Age Selection Buttons */}
              <div className="flex flex-col gap-8 w-full max-w-md mx-auto px-4">
                <DuoButton
                  variant="pink"
                  onClick={() => handleAgeSelect('4-5')}
                >
                  AGES 4-5
                </DuoButton>
                <DuoButton
                  variant="green"
                  onClick={() => handleAgeSelect('6-7')}
                >
                  AGES 6-7
                </DuoButton>
                <DuoButton
                  variant="yellow"
                  onClick={() => handleAgeSelect('8-9')}
                >
                  AGES 8-9
                </DuoButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 