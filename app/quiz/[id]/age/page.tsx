'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import { getBackgroundForPath } from '@/app/utils/backgrounds'

export default function AgeSelection() {
  const [userName, setUserName] = useState('')
  const [goofAttempts, setGoofAttempts] = useState(0)
  const [sassyMessage, setSassyMessage] = useState('')
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string
  const backgroundImage = getBackgroundForPath(`/quiz/${chapterId}/age`)

  const chapters = {
    '1': {
      host: "Mr. Whiskers",
      sassyResponses: [
        "Oh, aren't you just HILARIOUS! Almost as funny as that time Mr. Fluffbutt tried to pay for his bike with belly rubs. Now, how about your REAL age?",
        "Listen here, you little jokester! Even Mr. Fluffbutt knows when to be serious... sometimes. Let's try this ONE more time!"
      ]
    },
    '2': {
      host: "Mr. Fluffbutt",
      sassyResponses: [
        "A jester in my royal court? How... amusing. Now, tiny human, shall we try again with your ACTUAL age?",
        "Even my afternoon naps are more serious than this. Your real age, if you please, before I summon the royal guard!"
      ]
    }
  }

  const greetings = {
    '1': {
      title: "Welcome to the Quiz!",
      message: "What age group are you in?",
      buttonText: "Continue"
    },
    '2': {
      title: "Welcome to My Royal Quiz!",
      message: "State your age bracket, tiny subject of my mathematical kingdom!",
      buttonText: "Enter My Kingdom"
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
      
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Page Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      <div className="absolute top-0 left-0 w-full h-32">
        <Image
          src="/images/header.jpg"
          alt="Chapter Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </div>
      
      <div className="relative max-w-4xl mx-auto pt-48 p-8">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            {chapterId === '2' ? (
              <>Greetings, {userName}!</>
            ) : (
              <>Hi {userName}!</>
            )}
          </h1>
          
          {sassyMessage && (
            <div className={`mb-8 p-4 rounded-lg ${
              chapterId === '2' 
                ? 'bg-yellow-50 border border-yellow-200' 
                : 'bg-blue-50 border border-blue-200'
            }`}>
              <p className="text-lg text-center italic">{sassyMessage}</p>
            </div>
          )}

          <p className="text-xl mb-8 text-center">
            {greetings[chapterId as keyof typeof greetings].message}
          </p>

          <div className="space-y-4">
            {goofAttempts < 2 && (
              <>
                <button
                  onClick={() => handleAgeSelection('baby')}
                  className={`w-full p-4 text-left border rounded-lg transition-colors ${
                    chapterId === '2'
                      ? 'hover:bg-yellow-50 hover:border-yellow-300'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  I&apos;m a Little-Biddy-Baby WAH-WAH
                </button>

                <button
                  onClick={() => handleAgeSelection('ship')}
                  className={`w-full p-4 text-left border rounded-lg transition-colors ${
                    chapterId === '2'
                      ? 'hover:bg-yellow-50 hover:border-yellow-300'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  I&apos;m a Giant Cargo Ship HONK-HONK
                </button>
              </>
            )}

            <button
              onClick={() => handleAgeSelection('5-7')}
              className={`w-full p-4 text-left border rounded-lg transition-colors ${
                chapterId === '2'
                  ? 'hover:bg-yellow-50 hover:border-yellow-300'
                  : 'hover:bg-gray-50'
              }`}
            >
              5-7 years old
            </button>
            
            <button
              onClick={() => handleAgeSelection('8-9')}
              className={`w-full p-4 text-left border rounded-lg transition-colors ${
                chapterId === '2'
                  ? 'hover:bg-yellow-50 hover:border-yellow-300'
                  : 'hover:bg-gray-50'
              }`}
            >
              8-9 years old
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}