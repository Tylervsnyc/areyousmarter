'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import chapter3Data from '@/app/data/chapter3.json'

export default function NamePage() {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Please enter your name')
      return
    }
    router.push(`/quiz/3/age?name=${encodeURIComponent(name)}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          {chapter3Data.screens.name_selection.title}
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          {chapter3Data.screens.name_selection.greeting}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setError('')
              }}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              autoFocus
            />
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
} 