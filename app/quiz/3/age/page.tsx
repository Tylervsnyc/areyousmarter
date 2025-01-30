'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import chapter3Data from '../../../data/chapter3.json'

export default function AgePage() {
  const [message, setMessage] = useState('')
  const router = useRouter()
  const { age_selection } = chapter3Data.screens

  const handleAgeSelect = (age: string) => {
    if (age === '6-7' || age === '8-9') {
      sessionStorage.setItem('ageGroup', age)
      const name = sessionStorage.getItem('name') || ''
      router.push(`/quiz/3/${age}?name=${name}&version=${age === '6-7' ? 'easy' : 'hard'}`)
      return
    }

    setMessage(age_selection.sassy_responses[0])
  }

  return (
    <div className="p-4">
      <h1>{age_selection.title}</h1>
      <p>{age_selection.greeting}</p>
      {message && <p>{message}</p>}
      <div>
        <button onClick={() => handleAgeSelect('6-7')}>
          {age_selection.age_groups.younger}
        </button>
        <button onClick={() => handleAgeSelect('8-9')}>
          {age_selection.age_groups.older}
        </button>
        <button onClick={() => handleAgeSelect('baby')}>
          {age_selection.age_groups.goof_options.baby}
        </button>
        <button onClick={() => handleAgeSelect('ship')}>
          {age_selection.age_groups.goof_options.ship}
        </button>
      </div>
    </div>
  )
} 