'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import BackgroundPattern from '../../../components/BackgroundPattern'

interface ChapterData {
  title: string;
  greeting: string;
  sassyResponses: string[];
  finalWarning: string;
  ageGroups: {
    younger: string;
    older: string;
    baby: string;
    ship: string;
  };
  pattern: 'grid' | 'paper' | 'dots' | 'brush' | 'waves';
  tone: 'light' | 'warm' | 'cool';
}

export default function AgeSelection() {
  const [userName, setUserName] = useState('')
  const [goofAttempts, setGoofAttempts] = useState(0)
  const [sassyMessage, setSassyMessage] = useState('')
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string

  const chapters: Record<string, ChapterData> = {
    '1': {
      title: "Reveal Your Years of Wisdom!",
      greeting: "Now then, how many years have you spent studying the art of mathematics?",
      sassyResponses: [
        "Oh my whiskers! Are you trying to be funny? Even my afternoon naps are more serious than this. Your REAL age, if you please!",
        "*sigh* I see we have a jester in my mathematical court. Let's try this ONE more time, tiny human!"
      ],
      finalWarning: "Enough games! Choose your true age now, or it's back to mathematical kindergarten with you!",
      ageGroups: {
        younger: "5-7 years of mathematical experience",
        older: "8-9 years of numerical wisdom",
        baby: "I'm just a tiny kitten",
        ship: "I'm as old as Mr. Fluffbutt's royal lineage"
      },
      pattern: "paper",
      tone: "warm"
    },
    '2': {
      title: "Declare Your Years of Experience!",
      greeting: "Ah yes, how many years have you spent preparing for my mathematical challenges?",
      sassyResponses: [
        "A jester dares to mock the royal mathematician? How... amusing. Now, your ACTUAL age, before I summon the palace guards!",
        "Even my royal naps are more serious than this! Your true age, or it's off to the dungeon with you!"
      ],
      finalWarning: "The royal court has lost its patience! Choose your true age now, or face mathematical exile!",
      ageGroups: {
        younger: "5-7 years in the mathematical arts",
        older: "8-9 years of number mastery",
        baby: "I just hatched from an egg",
        ship: "I'm older than Mr. Fluffbutt's crown"
      },
      pattern: "waves",
      tone: "cool"
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
    const chapter = chapters[chapterId as keyof typeof chapters]
    
    // Handle goof answers (baby or ship)
    if (selection === 'baby' || selection === 'ship') {
      if (goofAttempts >= 2) return // Shouldn't happen due to hidden buttons
      
      // Show appropriate sassy response for first or second goof attempt
      setSassyMessage(chapter.sassyResponses[goofAttempts])
      setGoofAttempts(prev => prev + 1)
      return
    }

    // Handle real age selections (5-7 or 8-9)
    if (selection === '5-7' || selection === '8-9') {
      // Always allow proceeding with real age
      sessionStorage.setItem('ageGroup', selection)
      router.push(`/quiz/${chapterId}/questions`)
      return
    }
  }

  const chapter = chapters[chapterId as keyof typeof chapters]
  if (!chapter) return <div>Chapter not found</div>

  return (
    <BackgroundPattern pattern={chapter.pattern} tone={chapter.tone}>
      <main className="relative min-h-screen">
        <Navigation />
        
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
        
        <div className="relative max-w-4xl mx-auto pt-24 sm:pt-48 p-4 sm:p-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">{chapter.title}</h2>
              <p className="text-lg text-center text-gray-700 mb-6">
                {userName ? `Ah, ${userName}! ${chapter.greeting}` : chapter.greeting}
              </p>
              
              {sassyMessage && (
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 mb-6">
                  <p className="text-lg text-yellow-800 italic">{sassyMessage}</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Real age options - always available */}
                <button
                  onClick={() => handleAgeSelection('5-7')}
                  className="p-4 text-lg font-medium text-center rounded-lg border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                  {chapter.ageGroups.younger}
                </button>
                <button
                  onClick={() => handleAgeSelection('8-9')}
                  className="p-4 text-lg font-medium text-center rounded-lg border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                  {chapter.ageGroups.older}
                </button>

                {/* Goof options - only show before two goof attempts */}
                {goofAttempts < 2 && (
                  <>
                    <button
                      onClick={() => handleAgeSelection('baby')}
                      className="p-4 text-lg font-medium text-center rounded-lg border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                    >
                      {chapter.ageGroups.baby}
                    </button>
                    <button
                      onClick={() => handleAgeSelection('ship')}
                      className="p-4 text-lg font-medium text-center rounded-lg border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                    >
                      {chapter.ageGroups.ship}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </BackgroundPattern>
  )
}