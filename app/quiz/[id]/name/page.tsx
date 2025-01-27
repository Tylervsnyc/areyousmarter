'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import { getBackgroundForPath } from '@/app/utils/backgrounds'

interface PageProps {
  params: { id: string }  // Normal object, not a Promise
}

// Define available quiz chapters
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }]  // Simple array, no Promise
}

export default function NamePage({ params }: PageProps) {  // Removed async
  const router = useRouter()
  const chapterId = params.id
  const backgroundImage = getBackgroundForPath(`/quiz/${chapterId}/name`)
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      sessionStorage.setItem('userName', name.trim())
      router.push(`/quiz/${chapterId}/age`)
    } else {
      setError('Please enter your name')
    }
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

      <div className="relative max-w-4xl mx-auto pt-24 sm:pt-48 p-4 sm:p-8">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">What&apos;s your name?</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setError('')
                }}
                placeholder="Enter your name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
} 