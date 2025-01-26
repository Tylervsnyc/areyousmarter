'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../components/Navigation'

export default function QuizStart() {
  const [name, setName] = useState('')
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      // Store name in sessionStorage for use throughout quiz
      sessionStorage.setItem('userName', name.trim())
      router.push(`/quiz/${chapterId}/age`)
    }
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <div className="absolute top-0 left-0 w-full h-48">
        <Image
          src="/images/header.jpg"
          alt="Chapter Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </div>
      
      <div className="max-w-4xl mx-auto pt-24 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center px-4">
            {chapterId === '2' ? (
              "State Your Name, Tiny Subject!"
            ) : (
              `Welcome to Chapter ${chapterId}!`
            )}
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg mb-2 text-center px-4">
                {chapterId === '2' ? (
                  "*Adjusts crown while waiting regally* By what name shall I address you in my mathematical kingdom?"
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
                  chapterId === '2'
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {chapterId === '2' ? "Present Thyself" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
} 