'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import BackgroundPattern from '../../../components/BackgroundPattern'

interface ChapterData {
  title: string;
  greeting: string;
  namePrompt: string;
  buttonText: string;
  pattern: 'grid' | 'paper' | 'dots' | 'brush' | 'waves';
  tone: 'light' | 'warm' | 'cool';
}

const chapters: Record<string, ChapterData> = {
  '1': {
    title: "State Your Name, Tiny Human!",
    greeting: "Ah, a new challenger approaches my mathematical domain!",
    namePrompt: "By what name shall I address you in my kingdom of numbers?",
    buttonText: "Present Thyself",
    pattern: "grid",
    tone: "warm"
  },
  '2': {
    title: "Declare Your Identity, Mathematical Apprentice!",
    greeting: "Back for more wisdom from your feline overlord?",
    namePrompt: "What shall I call you in my grand mathematical court?",
    buttonText: "Enter My Domain",
    pattern: "brush",
    tone: "cool"
  }
}

export default function NamePage() {
  const router = useRouter()
  const params = useParams()
  const chapterId = params?.id as string
  const [name, setName] = useState('')
  const chapter = chapters[chapterId]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      sessionStorage.setItem('userName', name)
      router.push(`/quiz/${chapterId}/age`)
    }
  }

  if (!chapter) {
    return <div>Chapter not found</div>
  }

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
              <p className="text-lg text-center text-gray-700 mb-6">{chapter.greeting}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-lg text-center font-medium">
                    {chapter.namePrompt}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name, dear subject"
                    className="w-full p-2 sm:p-3 border-2 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    required
                    aria-label="Enter your name"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-center p-2 sm:p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold transition-colors"
                  aria-label="Continue to next step"
                >
                  {chapter.buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </BackgroundPattern>
  )
} 