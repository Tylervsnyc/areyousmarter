'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Navigation from '../../../components/Navigation'

export default function AgeSelection() {
  const [userName, setUserName] = useState('')
  const [goofAttempts, setGoofAttempts] = useState(0)
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id

  useEffect(() => {
    const name = sessionStorage.getItem('userName')
    if (!name) {
      router.push(`/quiz/${chapterId}`)
      return
    }
    setUserName(name)
  }, [chapterId, router])

  const chapters = {
    '1': {
      host: "Mr. Whiskers",
      sassyResponses: [
        "Oh, come on now! I may be a cat, but even I can tell you're pulling my whiskers! Let's try this again...",
        "Alright, you little jokester! Time to get serious - I've got quiz questions waiting!"
      ]
    },
    '2': {
      host: "Ms. Paws",
      sassyResponses: [
        "*adjusts reading glasses* My my, aren't we feeling silly today? Let's try picking your real age this time!",
        "As much as I enjoy a good laugh during my afternoon nap, we should probably get to the actual quiz!"
      ]
    }
  }

  const chapter = chapters[chapterId as keyof typeof chapters]

  const handleAgeSelection = (selection: string) => {
    if (selection === 'baby' || selection === 'ship') {
      if (goofAttempts < 2) {
        setGoofAttempts(prev => prev + 1)
      }
      return
    }

    sessionStorage.setItem('ageGroup', selection)
    router.push(`/quiz/${chapterId}/questions`)
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto pt-24 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Hi {userName}!</h1>
          
          {goofAttempts > 0 && (
            <div className="mb-8 p-4 bg-yellow-50 rounded-lg">
              <p className="text-lg text-center italic">
                {chapter.sassyResponses[Math.min(goofAttempts - 1, 1)]}
              </p>
            </div>
          )}

          <p className="text-lg mb-6 text-center">What age group are you in?</p>

          <div className="space-y-4">
            {goofAttempts < 2 && (
              <button
                onClick={() => handleAgeSelection('baby')}
                className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
              >
                I&apos;m a Little-Biddy-Baby WAH-WAH
              </button>
            )}

            <button
              onClick={() => handleAgeSelection('5-7')}
              className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
            >
              5-7 years old
            </button>
            
            <button
              onClick={() => handleAgeSelection('8-9')}
              className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
            >
              8-9 years old
            </button>

            {goofAttempts < 2 && (
              <button
                onClick={() => handleAgeSelection('ship')}
                className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
              >
                I&apos;m an Old, Old Wooden Ship
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  )
} 