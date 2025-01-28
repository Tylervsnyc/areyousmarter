'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import BackgroundPattern from '../../../components/BackgroundPattern'
import chapter1Data from '../../../data/chapter1.json'
import chapter2Data from '../../../data/chapter2.json'

type Pattern = 'dots' | 'grid' | 'paper' | 'brush' | 'waves'
type Tone = 'light' | 'warm' | 'cool'

interface ChapterData {
  id: string
  metadata: {
    title: string
    host: {
      name: string
      type: string
      traits: string[]
      description: string
    }
    financial_tracker: {
      bike_goal: number
      starting_balance: number
      money_earned: number
      current_balance: number
      remaining_goal: number
    }
    theme: {
      pattern: Pattern
      tone: Tone
    }
  }
  screens: {
    intro: {
      title: string
      subtitle: string
      opening_greeting: string
      description: string
      progress_message: string
      host_image: string
      button_text: string
    }
    name_selection: {
      title: string
      greeting: string
      button_text: string
      theme: {
        pattern: Pattern
        tone: Tone
      }
    }
    age_selection: {
      title: string
      greeting: string
      age_responses: {
        "5-7": string
        "8-10": string
        too_young: string
        too_old: string
        silly: string
      }
      sassy_responses: string[]
      final_warning: string
      age_groups: {
        younger: string
        older: string
        goof_options: {
          baby: string
          ship: string
        }
      }
      theme: {
        pattern: Pattern
        tone: Tone
      }
    }
    quiz: {
      younger: {
        questions: Array<{
          id: number
          question: string
          options: string[]
          correct_answer: string
          host_reactions: {
            correct: string
            incorrect: string
          }
        }>
      }
      older: {
        questions: Array<{
          id: number
          question: string
          options: string[]
          correct_answer: string
          host_reactions: {
            correct: string
            incorrect: string
          }
        }>
      }
    }
  }
}

const chapters: Record<string, ChapterData> = {
  '1': chapter1Data as ChapterData,
  '2': chapter2Data as ChapterData
}

export default function AgePage() {
  const [goofAttempts, setGoofAttempts] = useState(0)
  const [message, setMessage] = useState('')
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string

  const chapter = chapters[chapterId]
  if (!chapter) return <div>Chapter not found</div>

  const { age_selection } = chapter.screens

  const handleAgeSelect = (age: string) => {
    if (age === 'baby' || age === 'ship') {
      if (goofAttempts === 0) {
        setMessage(age_selection.sassy_responses[0])
        setGoofAttempts(1)
      } else if (goofAttempts === 1) {
        setMessage(age_selection.sassy_responses[1])
        setGoofAttempts(2)
      }
      return
    }

    if (goofAttempts < 2) {
      setMessage(age_selection.final_warning)
      return
    }

    sessionStorage.setItem('ageGroup', age)
    router.push(`/quiz/${chapterId}/questions`)
  }

  return (
    <BackgroundPattern pattern={age_selection.theme.pattern} tone={age_selection.theme.tone}>
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
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{age_selection.title}</h2>
                <p className="text-lg text-gray-700">{age_selection.greeting}</p>
                {message && (
                  <p className="mt-4 text-lg font-medium text-indigo-600">{message}</p>
                )}
              </div>
              
              <div className="flex flex-col max-w-md mx-auto space-y-3">
                <button
                  onClick={() => handleAgeSelect('5-7')}
                  className={`p-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors ${
                    goofAttempts < 2 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={goofAttempts < 2}
                >
                  {age_selection.age_groups.younger}
                </button>
                
                <button
                  onClick={() => handleAgeSelect('8-9')}
                  className={`p-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors ${
                    goofAttempts < 2 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={goofAttempts < 2}
                >
                  {age_selection.age_groups.older}
                </button>
                
                <button
                  onClick={() => handleAgeSelect('baby')}
                  className={`p-3 text-base font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors ${
                    goofAttempts >= 2 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={goofAttempts >= 2}
                >
                  {age_selection.age_groups.goof_options.baby}
                </button>
                
                <button
                  onClick={() => handleAgeSelect('ship')}
                  className={`p-3 text-base font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors ${
                    goofAttempts >= 2 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={goofAttempts >= 2}
                >
                  {age_selection.age_groups.goof_options.ship}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </BackgroundPattern>
  )
}