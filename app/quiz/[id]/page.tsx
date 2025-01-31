'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import { useParams } from 'next/navigation'
import chapter1Data from '@/app/data/chapter1.json'
import chapter2Data from '@/app/data/chapter2.json'
import chapter3Data from '@/app/data/chapter3.json'
import { getBackgroundForPath } from '@/app/utils/backgrounds'

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
  }
}

const chapters: Record<string, ChapterData> = {
  '1': chapter1Data as ChapterData,
  '2': chapter2Data as ChapterData,
  '3': chapter3Data as ChapterData
}

export default function ChapterHome() {
  const params = useParams()
  const id = params?.id as string
  const chapter = chapters[id]
  const backgroundImage = getBackgroundForPath(`/quiz/${id}`)
  
  if (!chapter) {
    return <div>Chapter not found</div>
  }

  const { metadata, screens } = chapter
  const { intro } = screens

  return (
    <main className="relative min-h-screen">
      {/* Header Image */}
      <div className="absolute top-0 left-0 w-full h-32 z-0">
        <Image
          src="/images/header.jpg"
          alt="Chapter Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/70" />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background Pattern"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/80" />
      </div>

      <div className="relative z-50">
        <Navigation />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto pt-24 p-8">
        <div className="relative bg-white/80 backdrop-blur-lg rounded-xl shadow-xl p-8 prose prose-lg max-w-none">
          {/* Checkered Pattern Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/tiles.svg")',
              backgroundSize: '80px 80px',
              backgroundRepeat: 'repeat',
              opacity: 0.1
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="mb-4">{intro.title}</h1>
              <p className="text-xl text-gray-600">
                {intro.subtitle}
              </p>
            </div>

            <div className="relative mb-8">
              <div className="flex items-start gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4">Meet Your Host: {metadata.host.name}</h2>
                  <p className="text-gray-600 mb-4">{intro.opening_greeting}</p>
                </div>
                <div className="w-32 h-32 flex-shrink-0 animate-bounce-gentle">
                  <Image
                    src="/images/mrfb.jpg"
                    alt="Mr. Fluffbutt"
                    width={128}
                    height={128}
                    className="rounded-full border-4 border-amber-400 shadow-lg animate-wiggle"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a 
                href={id === "1" ? "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-1" : "https://substack.com/home/post/p-155624830?source=queue"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-gray-900 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-colors"
                role="button"
                tabIndex={0}
                aria-label="Read the Story"
              >
                Read the Story
              </a>
              <Link 
                href={`/quiz/${id}/name`}
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] animate-pulse-subtle"
                role="button"
                tabIndex={0}
                aria-label={intro.button_text}
              >
                {intro.button_text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 