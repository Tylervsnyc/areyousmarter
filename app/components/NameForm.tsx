'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface NameFormProps {
  chapterId: string;
}

const chapters = {
  '1': {
    style: 'standard',
    title: "What's your name?",
    buttonText: "Let's Begin!"
  },
  '2': {
    style: 'imperial',
    title: "State Your Name, Tiny Subject!",
    buttonText: "Enter the Kingdom"
  }
} as const;

export default function NameForm({ chapterId }: NameFormProps) {
  const [name, setName] = useState('')
  const router = useRouter()
  const chapter = chapters[chapterId as keyof typeof chapters]

  if (!chapter) {
    return <div>Chapter not found</div>
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedName = name.trim()
    if (trimmedName) {
      sessionStorage.setItem('userName', trimmedName)
      router.push(`/quiz/${chapterId}/age`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        {chapter.title}
      </h1>
      
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border-2 rounded-lg focus:border-blue-500 focus:outline-none"
          placeholder="Enter your name"
          required
        />
      </div>

      <button
        type="submit"
        className={`w-full p-3 rounded-lg text-white font-semibold transition-colors ${
          chapter.style === 'imperial'
            ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700'
            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
        }`}
      >
        {chapter.buttonText}
      </button>
    </form>
  )
} 