'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Navigation from '../../../components/Navigation'

export default function AgeSelection() {
  const [userName, setUserName] = useState('')
  const [goofAttempts, setGoofAttempts] = useState(0)
  const [sassyMessage, setSassyMessage] = useState('')
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string

  const chapters = {
    '1': {
      host: "Mr. Whiskers",
      sassyResponses: [
        "Oh, aren't you just HILARIOUS! Almost as funny as that time Mr. Fluffbutt tried to pay for his bike with belly rubs. Now, how about your REAL age?",
        "Listen here, you little jokester! Even Mr. Fluffbutt knows when to be serious... sometimes. Let's try this ONE more time!"
      ]
    },
    '2': {
      host: "Ms. Paws",
      sassyResponses: [
        "*adjusts reading glasses* My my, we've got quite the comedian here! But darling, I've napped through better jokes at the park. Your actual age, please?",
        "Oh sweetie, I may be old, but I wasn't born yesterday! Let's be serious now, shall we?"
      ]
    }
  }

  useEffect(() => {
    const name = sessionStorage.getItem('userName')
    if (!name) {
      router.push(`/quiz/${chapterId}`)
      return
    }
    setUserName(name)
  }, [chapterId, router])

  const handleAgeSelection = (selection: string) => {
    if (selection === 'baby' || selection === 'ship') {
      const chapter = chapters[chapterId as keyof typeof chapters]
      setSassyMessage(chapter.sassyResponses[Math.min(goofAttempts, 1)])
      setGoofAttempts(prev => prev + 1)
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
          
          {sassyMessage && (
            <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-lg text-center italic">{sassyMessage}</p>
            </div>
          )}

          <p className="text-xl mb-8 text-center">What age group are you in?</p>

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

          {goofAttempts >= 2 && (
            <p className="mt-6 text-sm text-center text-gray-500">
              Okay, okay! Let&apos;s be serious now. Pick your real age group!
            </p>
          )}
        </div>
      </div>
    </main>
  )
} 