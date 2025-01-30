'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import chapter3Data from '../../../data/chapter3.json'

export default function NamePage() {
  const [name, setName] = useState('')
  const router = useRouter()
  const { name_selection } = chapter3Data.screens

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      sessionStorage.setItem('name', name.trim())
      router.push('/quiz/3/age')
    }
  }

  return (
    <div className="p-4">
      <h1>{name_selection.title}</h1>
      <p>{name_selection.greeting}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">
          {name_selection.button_text}
        </button>
      </form>
    </div>
  )
} 