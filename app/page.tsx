'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function Home() {
  const chaptersRef = useRef<HTMLDivElement>(null)

  const scrollToChapters = () => {
    chaptersRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

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
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-purple-50 to-white">
        <h1 className="text-6xl font-bold mb-6 text-center">
          Are You Smarter Than Mr. Fluffbutt?
        </h1>

        <h2 className="text-2xl mb-12 text-center text-gray-600">
          A Game Show Based on &quot;Help Me Get This Bike!&quot;
        </h2>

        <button
          onClick={scrollToChapters}
          className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-600 transition-all hover:scale-105"
        >
          Choose Your Chapter
        </button>
      </div>

      {/* Chapter Selection */}
      <div ref={chaptersRef} className="min-h-screen p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Select a Chapter:</h3>
          <div className="grid gap-4">
            {chapters.map((chapter) => (
              <div 
                key={chapter.id}
                className={`p-6 border rounded-lg shadow-sm ${
                  chapter.available 
                    ? 'bg-white hover:bg-gray-50 hover:shadow-md cursor-pointer transform transition-all hover:-translate-y-1' 
                    : 'bg-gray-100 cursor-not-allowed'
                }`}
              >
                {chapter.available ? (
                  <Link 
                    href={`/chapters/${chapter.id}`}
                    className="block"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-lg">
                        Chapter {chapter.id}: {chapter.title}
                      </span>
                      <span className="text-gray-600">
                        Host: {chapter.host}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="block pointer-events-none">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-lg">
                        Chapter {chapter.id}: {chapter.title}
                      </span>
                      <span className="text-gray-600">
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
      </div>

      {/* Substack Link */}
      <a 
        href="https://learnthroughstories.substack.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed top-4 right-4 transform transition-all hover:scale-110"
      >
        <Image 
          src="/images/substack.jpg" 
          alt="Subscribe to Learn Through Stories" 
          width={48}
          height={48}
          className="rounded-lg shadow-md"
        />
      </a>
    </main>
  );
}
