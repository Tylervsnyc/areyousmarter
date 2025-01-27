'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface NameFormProps {
  chapterId: string
}

export default function NameForm({ chapterId }: NameFormProps) {
  const router = useRouter()
  const [name, setName] = useState('')

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      sessionStorage.setItem('userName', name)
      router.push(`/quiz/${chapterId}/questions`)
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const form = e.currentTarget.closest('form')
      if (form) form.requestSubmit()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4" role="main">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Enter Your Name
          </h2>
        </div>
        <form 
          className="mt-8 space-y-6" 
          onSubmit={handleFormSubmit}
          aria-label="Name entry form"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your name"
              value={name}
              onChange={handleNameChange}
              onKeyDown={handleKeyDown}
              aria-label="Enter your name"
              aria-required="true"
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Start quiz"
              tabIndex={0}
            >
              Start Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 