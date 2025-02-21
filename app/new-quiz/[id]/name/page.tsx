'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getChapter } from '../../data/new-chapters'
import { DuoTemplateButton } from '../../components/DuoTemplateButton'
import DuoHeader from '../../components/DuoHeader'
import { duoFontStyles, duoDefaultTheme } from '../../styles'
import { playButtonPress } from '../../utils/sounds'
import Link from 'next/link'

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

export default function NamePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [quip] = useState(() => 
    nameQuips[Math.floor(Math.random() * nameQuips.length)]
  )

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    playButtonPress();
    setError('')
    
    const trimmedName = name.trim()
    if (!trimmedName) {
      setError('Please enter your name')
      return
    }

    if (trimmedName.length > 50) {
      setError('Name is too long (maximum 50 characters)')
      return
    }

    if (!/^[a-zA-Z0-9\s-]+$/.test(trimmedName)) {
      setError('Name can only contain letters, numbers, spaces, and hyphens')
      return
    }

    router.push(`/new-quiz/${params.id}/age?name=${encodeURIComponent(trimmedName)}`)
  }

  const handleButtonPress = () => {
    // Implement the logic to handle the button press
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
                className="rounded-xl border-4 p-6 sm:p-8 mb-12"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text">
                  {quip}
                </h1>
              </div>

              {/* Name Input Form */}
              <div className="w-full max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
                        setError('')
                      }}
                      className={`w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent title-text ${
                        error ? 'border-rose-500' : 'border-yellow-400'
                      }`}
                      placeholder="Type your name here..."
                      required
                      maxLength={50}
                      aria-invalid={!!error}
                      aria-describedby={error ? "name-error" : undefined}
                    />
                    {error && (
                      <p id="name-error" className="text-rose-500 text-sm">
                        {error}
                      </p>
                    )}
                  </div>
                  
                  <DuoTemplateButton variant="macaw" type="submit">
                    Continue to Age Selection
                  </DuoTemplateButton>
                </form>

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
    </div>
  )
} 