'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../components/Navigation'
import BackgroundPattern from '../../components/BackgroundPattern'
import chapter3Data from '../../data/chapter3.json'

type Pattern = 'dots' | 'grid' | 'paper' | 'brush' | 'waves'
type Tone = 'light' | 'warm' | 'cool'

interface ChapterData {
  id: string
  metadata: {
    title: string
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
  }
}

export default function Chapter3Page() {
  const router = useRouter()
  const { intro } = (chapter3Data as ChapterData).screens
  const { pattern, tone } = (chapter3Data as ChapterData).metadata.theme

  const handleStart = () => {
    router.push('/quiz/3/name')
  }

  return (
    <BackgroundPattern pattern={pattern} tone={tone}>
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/70" />
        </div>
        
        <div className="relative max-w-4xl mx-auto pt-24 sm:pt-48 p-4 sm:p-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">{intro.title}</h1>
                <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">{intro.subtitle}</h2>
                <p className="text-lg text-gray-700 mb-6">{intro.opening_greeting}</p>
                <p className="text-lg text-gray-700 mb-6">{intro.description}</p>
                <p className="text-lg text-indigo-600 font-medium">{intro.progress_message}</p>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={handleStart}
                  className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {intro.button_text}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </BackgroundPattern>
  )
} 