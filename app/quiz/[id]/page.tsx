'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../components/Navigation'
import Link from 'next/link'
import { getBackgroundForPath } from '@/app/utils/backgrounds'

interface BaseChapter {
  host: string;
  title: string;
  intro: string;
  image: string;
  style: string;
  description: string;
}

type ChapterData = Record<string, BaseChapter>;

const chapters: ChapterData = {
  '1': {
    host: "Mr. Fluffbutt",
    title: "Help Me Get This Bike!",
    intro: "Meet Hudson, a determined young human who dreams of owning a shiny new bike. But bikes aren't cheap - this one costs $500! Hudson has decided to start a cat-sitting business to earn money. Let's help him track his progress and solve some money math problems along the way!",
    image: "/images/mrfb.jpg",
    style: "imperial",
    description: "Mr. Fluffbutt is a regal Persian cat who considers himself royalty. Despite his sassy attitude, he secretly enjoys helping children learn math - though he'd never admit it!"
  },
  '2': {
    host: "Mr. Fluffbutt",
    title: "A Big Three Dollar Gamble",
    intro: "Welcome to my kingdom of knowledge, tiny humans! I shall test your mathematical prowess in Hudson's pet-sitting enterprise. Dare to challenge the greatest feline mind?",
    image: "/images/mrfb.jpg",
    style: "imperial",
    description: "Mr. Fluffbutt is a regal Persian cat who considers himself royalty. Despite his sassy attitude, he secretly enjoys helping children learn math - though he'd never admit it!"
  }
}

export default function QuizStart() {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string
  const backgroundImage = getBackgroundForPath(`/quiz/${chapterId}`)

  const chapter = chapters[chapterId as keyof typeof chapters]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      // Store name in sessionStorage for use throughout quiz
      sessionStorage.setItem('userName', name.trim())
      router.push(`/quiz/${chapterId}/age`)
    }
  }

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chapter Not Found</h1>
          <p className="mb-4">This chapter isn&apos;t available yet. Check back soon!</p>
          <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
        </div>
      </div>
    )
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
      
      <div className="relative max-w-4xl mx-auto pt-48 p-8">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <h1 className="text-3xl font-bold mb-6 text-center px-4">
            {chapter.style === 'imperial' ? (
              "State Your Name, Tiny Subject!"
            ) : (
              `Welcome to Chapter ${chapterId}!`
            )}
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg mb-2 text-center px-4">
                {chapter.style === 'imperial' ? (
                  "By what name shall I address you in my mathematical kingdom?"
                ) : (
                  "What's your first name?"
                )}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className={`px-6 py-2 rounded-lg text-white transition-colors ${
                  chapter.style === 'imperial'
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {chapter.style === 'imperial' ? "Present Thyself" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
} 