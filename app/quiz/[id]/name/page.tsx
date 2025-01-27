'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import { getBackgroundForPath } from '../../../utils/backgrounds'

interface ChapterData {
  style: string;
}

const chapters: Record<string, ChapterData> = {
  '1': {
    style: 'friendly'
  },
  '2': {
    style: 'imperial'
  }
}

interface PageProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function NameSelection({ params }: PageProps) {
  const [name, setName] = useState('')
  const router = useRouter()
  const chapterId = params.id
  const chapter = chapters[chapterId]

  if (!chapter) {
    return <div>Chapter not found</div>
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      sessionStorage.setItem('userName', name.trim())
      router.push(`/quiz/${chapterId}/age`)
    }
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={getBackgroundForPath(`/quiz/${chapterId}/name`)}
          alt="Page Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      <div className="relative max-w-4xl mx-auto pt-48 p-4 sm:p-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center px-4">
            {chapter.style === 'imperial' ? (
              "State Your Name, Tiny Subject!"
            ) : (
              "What's your name?"
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