'use client'

import { useRouter } from 'next/navigation'
import chapter3Data from '../../data/chapter3.json'

export default function Chapter3Page() {
  const router = useRouter()
  const { intro } = chapter3Data.screens

  const handleStart = () => {
    router.push('/quiz/3/name')
  }

  return (
    <div className="p-4">
      <h1>{intro.title}</h1>
      <p>{intro.description}</p>
      <button onClick={handleStart}>
        {intro.button_text}
      </button>
    </div>
  )
} 