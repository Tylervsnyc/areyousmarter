'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import { getBackgroundForPath } from '@/app/utils/backgrounds'

export default function NamePage() {
  const router = useRouter()
  const params = useParams()
  const chapterId = params?.id as string
  const [name, setName] = useState('')
  const backgroundImage = getBackgroundForPath(`/quiz/${chapterId}/name`)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      sessionStorage.setItem('userName', name)
      router.push(`/quiz/${chapterId}/age`)
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
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">What&apos;s your name?</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-2 sm:p-3 border-2 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                required
                aria-label="Enter your name"
              />
              <button
                type="submit"
                className="w-full text-center p-2 sm:p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                aria-label="Continue to next step"
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