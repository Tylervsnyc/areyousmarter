'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import BackgroundPattern from '../../../components/BackgroundPattern'
import chapter1Data from '../../../data/chapter1.json'
import chapter2Data from '../../../data/chapter2.json'
import chapter3Data from '../../../data/chapter3.json'

type Pattern = 'grid' | 'paper' | 'dots' | 'brush' | 'waves'
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
        "6-7": string
        "8-9": string
        baby: string
        ship: string
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
    results: {
      title: string
      messages: {
        perfect: string
        great: string
        good: string
        needsPractice: string
      }
      buttons: {
        tryAgain: string
        home: string
      }
    }
  }
}

const chapters: Record<string, ChapterData> = {
  '1': chapter1Data as unknown as ChapterData,
  '2': chapter2Data as unknown as ChapterData,
  '3': chapter3Data as unknown as ChapterData
}

export default function NamePage() {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string

  const chapter = chapters[chapterId]
  if (!chapter) return <div>Chapter not found</div>

  const { name_selection } = chapter.screens

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim()) {
      setError('Please enter your name')
      return
    }

    sessionStorage.setItem('userName', name.trim())
    router.push(`/quiz/${chapterId}/age`)
  }

  return (
    <BackgroundPattern pattern={name_selection.theme.pattern} tone={name_selection.theme.tone}>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">{name_selection.title}</h2>
              <p className="text-lg text-center text-gray-700 mb-6">
                {name_selection.greeting}
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="space-y-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      setError('')
                    }}
                    placeholder="Enter your name"
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    aria-label="Your name"
                  />
                  
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full p-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {name_selection.button_text}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </BackgroundPattern>
  )
} 