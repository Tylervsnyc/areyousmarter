'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface NameFormProps {
  chapterId: string;
  style: string;
}

export default function NameForm({ chapterId, style }: NameFormProps) {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      sessionStorage.setItem('userName', name.trim())
      router.push(`/quiz/${chapterId}/age`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-lg mb-2 text-center px-4">
          {style === 'imperial' ? (
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
            style === 'imperial'
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {style === 'imperial' ? "Present Thyself" : "Next"}
        </button>
      </div>
    </form>
  )
} 