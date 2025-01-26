'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function AgeSelection() {
  const [userName, setUserName] = useState('')
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id

  useEffect(() => {
    const name = sessionStorage.getItem('userName')
    if (!name) {
      router.push(`/quiz/${chapterId}`)
      return
    }
    setUserName(name)
  }, [chapterId, router])

  const handleAgeSelection = (ageGroup: '5-7' | '8-9') => {
    sessionStorage.setItem('ageGroup', ageGroup)
    router.push(`/quiz/${chapterId}/questions`)
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Hi {userName}!</h1>
        <p className="text-lg mb-6">What age group are you in?</p>

        <div className="space-y-4">
          <button
            onClick={() => handleAgeSelection('5-7')}
            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50"
          >
            5-7 years old
          </button>
          
          <button
            onClick={() => handleAgeSelection('8-9')}
            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50"
          >
            8-9 years old
          </button>
        </div>
      </div>
    </main>
  )
} 