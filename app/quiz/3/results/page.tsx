'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import BackgroundPattern from '../../../components/BackgroundPattern'
import chapter3Data from '../../../data/chapter3.json'

type Pattern = 'dots' | 'grid' | 'paper' | 'brush' | 'waves'
type Tone = 'light' | 'warm' | 'cool'

interface ChapterData {
  id: string
  metadata: {
    theme: {
      pattern: Pattern
      tone: Tone
    }
  }
  screens: {
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

export default function ResultsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get('score') || '0')
  const total = parseInt(searchParams.get('total') || '10')
  const name = searchParams.get('name') || ''

  const chapter = chapter3Data as ChapterData
  const { results } = chapter.screens
  const { pattern, tone } = chapter.metadata.theme

  const percentage = (score / total) * 100

  const getMessage = () => {
    if (percentage === 100) return results.messages.perfect
    if (percentage >= 80) return results.messages.great
    if (percentage >= 60) return results.messages.good
    return results.messages.needsPractice
  }

  const handleTryAgain = () => {
    const timestamp = Date.now()
    router.push(`/quiz/3/age?t=${timestamp}`)
  }

  const handleHome = () => {
    router.push('/')
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
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{results.title}</h2>
                <p className="text-lg text-gray-700 mb-4">
                  {name}, you scored {score} out of {total}!
                </p>
                <p className="text-lg font-medium text-indigo-600">{getMessage()}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <button
                  onClick={handleTryAgain}
                  className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {results.buttons.tryAgain}
                </button>
                
                <button
                  onClick={handleHome}
                  className="px-6 py-3 text-lg font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {results.buttons.home}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </BackgroundPattern>
  )
} 