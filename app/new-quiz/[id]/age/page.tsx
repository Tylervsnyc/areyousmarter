'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getChapter } from '../../data/chapters'
import { DuoTemplateButton } from '../../components/DuoTemplateButton'
import DuoHeader from '../../components/DuoHeader'
import { duoFontStyles, duoDefaultTheme } from '../../styles'
import { playButtonPress } from '../../utils/sounds'
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

export default function AgePage({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState('')
  const [goofCount, setGoofCount] = useState(0)
  const [quip] = useState(() => 
    ageQuips[Math.floor(Math.random() * ageQuips.length)]
  )
  const router = useRouter()
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''

  const chapter = getChapter(params.id)
  if (!chapter) {
    notFound()
  }

  // Prevent scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleAgeSelect = (ageRange: string) => {
    playButtonPress()
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

    router.push(`/new-quiz/${params.id}/quiz?age=${ageRange}&name=${encodeURIComponent(name)}`)
  }

  const handleBackButtonPress = (e: React.MouseEvent) => {
    e.preventDefault()
    playButtonPress()
    router.push(`/new-quiz/${params.id}/name`)
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
              <div className="w-full max-w-md mx-auto space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <DuoTemplateButton
                    variant="feather"
                    onClick={() => handleAgeSelect('4-5')}
                  >
                    AGES 4-5
                  </DuoTemplateButton>
                  <DuoTemplateButton
                    variant="macaw"
                    onClick={() => handleAgeSelect('6-7')}
                  >
                    AGES 6-7
                  </DuoTemplateButton>
                  <DuoTemplateButton
                    variant="lilac"
                    onClick={() => handleAgeSelect('8-9')}
                  >
                    AGES 8-9
                  </DuoTemplateButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 