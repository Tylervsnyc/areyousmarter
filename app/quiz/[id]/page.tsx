'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

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
    <main className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Chapter {chapterId}!</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg mb-2">
              What&apos;s your first name?
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
          
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        </form>
      </div>
    </main>
  )
} 