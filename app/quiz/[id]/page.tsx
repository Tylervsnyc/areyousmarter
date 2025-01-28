'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import BackgroundPattern from '../../components/BackgroundPattern'
import { useParams } from 'next/navigation'
import chapter1Data from '../../data/chapter1.json'
import chapter2Data from '../../data/chapter2.json'

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

export default function ChapterHome() {
  const params = useParams()
  const id = params?.id as string
  const chapter = chapters[id]
  
  if (!chapter) {
    return <div>Chapter not found</div>
  }

  const { metadata, screens } = chapter
  const { intro } = screens

  return (
    <BackgroundPattern pattern={metadata.theme.pattern} tone={metadata.theme.tone}>
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
        
        <div className="relative max-w-4xl mx-auto pt-48 p-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
            <div className="text-center mb-8">
              <h1 className="mb-4">{intro.title}</h1>
              <p className="text-xl text-gray-600">
                {intro.subtitle}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Meet Your Host: {metadata.host.name}</h2>
              <p className="text-gray-600 mb-4">{metadata.host.description}</p>
              <p className="text-gray-600 mb-4">{intro.opening_greeting}</p>
              <p className="text-gray-600 mb-4">{intro.description}</p>
              <p className="text-gray-600 mb-4 italic">{intro.progress_message}</p>
            </div>

            <div className="flex justify-center">
              <Link 
                href={`/quiz/${id}/name`}
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                role="button"
                tabIndex={0}
                aria-label={intro.button_text}
              >
                {intro.button_text}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </BackgroundPattern>
  )
} 