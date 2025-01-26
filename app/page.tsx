'use client'

import Link from 'next/link'
import { useState } from 'react'
import Navigation from './components/Navigation'

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const chapters = [
    {
      id: 1,
      title: "The Bike Shop",
      host: "Mr. Whiskers",
      available: true,
    },
    {
      id: 2,
      title: "The Park",
      host: "Ms. Paws",
      available: true,
    },
    ...Array(8).fill(null).map((_, index) => ({
      id: index + 3,
      title: `Chapter ${index + 3}`,
      host: "???",
      available: false,
    }))
  ];

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-purple-50 to-white">
        <h1 className="text-6xl font-bold mb-6 text-center">
          Are You Smarter Than Mr. Fluffbutt?
        </h1>

        <h2 className="text-2xl mb-12 text-center text-gray-600">
          A Game Show Based on &quot;Help Me Get This Bike!&quot;
        </h2>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-600 transition-all hover:scale-105 flex items-center space-x-2"
          >
            <span>Choose Your Chapter</span>
            <svg 
              className={`w-6 h-6 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-96 bg-white rounded-lg shadow-lg border overflow-hidden">
              <div className="max-h-96 overflow-y-auto">
                {chapters.map((chapter) => (
                  <div 
                    key={chapter.id}
                    className={`p-4 border-b last:border-b-0 ${
                      chapter.available 
                        ? 'hover:bg-gray-50 cursor-pointer' 
                        : 'bg-gray-50 cursor-not-allowed'
                    }`}
                  >
                    {chapter.available ? (
                      <Link 
                        href={`/chapters/${chapter.id}`}
                        className="block"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">
                            Chapter {chapter.id}: {chapter.title}
                          </span>
                          <span className="text-gray-600 text-sm">
                            Host: {chapter.host}
                          </span>
                        </div>
                      </Link>
                    ) : (
                      <div className="block pointer-events-none">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">
                            Chapter {chapter.id}: {chapter.title}
                          </span>
                          <span className="text-gray-600 text-sm">
                            Host: {chapter.host}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">Coming Soon</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
