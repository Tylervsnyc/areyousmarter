'use client'

import { Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import chapter3Data from '@/app/data/chapter3.json'

const ResultsContent = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const score = parseInt(searchParams.get('score') || '0')
  const total = parseInt(searchParams.get('total') || '0')
  const name = searchParams.get('name') || ''
  const percentage = (score / total) * 100

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-md w-full text-center space-y-6 relative z-10">
        <h1 className="text-3xl font-bold text-gray-900">{chapter3Data.screens.results.title}</h1>
        <p className="text-xl text-gray-700">
          {name}, you scored {score} out of {total}!
        </p>
        <p className="text-lg text-gray-600">
          {percentage >= 70
            ? chapter3Data.screens.results.messages.great
            : percentage >= 40
            ? chapter3Data.screens.results.messages.good
            : chapter3Data.screens.results.messages.needsPractice}
        </p>
        <button
          onClick={() => router.push('/')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          {chapter3Data.screens.results.buttons.home}
        </button>
      </div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  )
} 