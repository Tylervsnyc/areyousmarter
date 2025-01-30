'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import BackgroundPattern from '../../../components/BackgroundPattern'
import chapter3Data from '../../../data/chapter3.json'

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
    name_selection: {
      title: string
      greeting: string
      button_text: string
      theme: {
        pattern: Pattern
        tone: Tone
      }
    }
  }
}

export default function NamePage() {
  const [name, setName] = useState('')
  const router = useRouter()
  const { name_selection } = (chapter3Data as ChapterData).screens
  const { pattern, tone } = name_selection.theme

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      sessionStorage.setItem('name', name.trim())
      router.push('/quiz/3/age')
    }
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
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{name_selection.title}</h2>
                <p className="text-lg text-gray-700">{name_selection.greeting}</p>
              </div>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                
                <button
                  type="submit"
                  className="w-full p-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {name_selection.button_text}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </BackgroundPattern>
  )
} 