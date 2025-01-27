'use client'

import Link from 'next/link'
import Navigation from './components/Navigation'
import Image from 'next/image'
import { getBackgroundForPath } from './utils/backgrounds'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={getBackgroundForPath('/')}
          alt="Page Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      <div className="relative max-w-4xl mx-auto pt-48 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Are You Smarter Than Mr. Fluffbutt?
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Link
              href="/quiz/1"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-4">Chapter 1</h2>
              <p className="text-gray-600">Help Hudson save for his dream bike!</p>
            </Link>
            
            <Link
              href="/quiz/2"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-4">Chapter 2</h2>
              <p className="text-gray-600">Test your math skills against Mr. Fluffbutt!</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
