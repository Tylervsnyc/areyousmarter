'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 text-center mb-12 leading-tight">
          Are You Smarter Than<br />Mr. Fluffbutt?
        </h1>
        <button 
          onClick={() => router.push('/quiz')}
          className="bg-purple-600 hover:bg-purple-700 text-white text-xl md:text-2xl font-semibold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          Take the Quiz!
        </button>
      </div>
    </div>
  )
}
