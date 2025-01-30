'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import chapter3Data from '../../../data/chapter3.json'

export default function ResultsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get('score') || '0')
  const total = parseInt(searchParams.get('total') || '10')
  const name = searchParams.get('name') || ''

  const { results } = chapter3Data.screens
  const percentage = (score / total) * 100

  const getMessage = () => {
    if (percentage === 100) return results.messages.perfect
    if (percentage >= 80) return results.messages.great
    if (percentage >= 60) return results.messages.good
    return results.messages.needsPractice
  }

  const handleTryAgain = () => {
    router.push('/quiz/3/age')
  }

  const handleHome = () => {
    router.push('/')
  }

  return (
    <div className="p-4">
      <h1>{results.title}</h1>
      <p>{name}, you scored {score} out of {total}!</p>
      <p>{getMessage()}</p>
      <div>
        <button onClick={handleTryAgain}>
          {results.buttons.tryAgain}
        </button>
        <button onClick={handleHome}>
          {results.buttons.home}
        </button>
      </div>
    </div>
  )
} 