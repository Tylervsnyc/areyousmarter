'use client'

import Link from 'next/link'
import Navigation from './components/Navigation'
import Image from 'next/image'
import { getBackgroundForPath } from './utils/backgrounds'
import { useState } from 'react'

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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

      <div className="relative max-w-6xl mx-auto pt-48 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <div className="text-center mb-12">
            <h1 className="mb-4">Welcome to Mr. Fluffbutt&apos;s Learning Adventures!</h1>
            <p className="text-xl text-gray-600">
              Choose your story and begin your journey!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Help Me Get This Bike */}
            <div className="relative">
              <div 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-2 border-blue-100 hover:border-blue-300 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <h2 className="text-xl font-semibold mb-2">Help Me Get This Bike!</h2>
                <p className="text-gray-600 mb-4">Join Hudson on his journey to earn money for his dream bike!</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600">2 Chapters Available</span>
                  <svg className={`w-5 h-5 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
                  <Link href="/quiz/1" className="block p-4 hover:bg-blue-50 border-b">
                    <h3 className="font-semibold">Chapter 1: Help Me Get This Bike!</h3>
                    <p className="text-sm text-gray-600">Cat-Sitting Adventures with Mr. Fluffbutt</p>
                  </Link>
                  <Link href="/quiz/2" className="block p-4 hover:bg-blue-50">
                    <h3 className="font-semibold">Chapter 2: A Big Three Dollar Gamble</h3>
                    <p className="text-sm text-gray-600">Test your math skills in Mr. Fluffbutt&apos;s royal kingdom!</p>
                  </Link>
                </div>
              )}
            </div>

            {/* The Garden of Growing Hearts */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-2 border-green-100 hover:border-green-300">
              <h2 className="text-xl font-semibold mb-2">The Garden of Growing Hearts</h2>
              <p className="text-gray-600 mb-4">Explore the magic of growing and sharing in this heartwarming tale!</p>
              <div className="flex items-center justify-between">
                <span className="text-green-600">4 Chapters Available</span>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">Available Now</span>
              </div>
            </div>

            {/* Junk's Adventures */}
            <div className="bg-white rounded-lg shadow-md transition-shadow p-6 border-2 border-gray-100 opacity-75">
              <h2 className="text-xl font-semibold mb-2">Junk&apos;s Adventures</h2>
              <p className="text-gray-600 mb-4">Join Junk on exciting mathematical journeys!</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Coming Soon</span>
                <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">Stay Tuned!</span>
              </div>
            </div>

            {/* A Coding Adventure */}
            <div className="bg-white rounded-lg shadow-md transition-shadow p-6 border-2 border-gray-100 opacity-75">
              <h2 className="text-xl font-semibold mb-2">A Coding Adventure</h2>
              <p className="text-gray-600 mb-4">Learn to code with Mr. Fluffbutt as your guide!</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Coming Soon</span>
                <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">Stay Tuned!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
