'use client'

import Link from 'next/link'
import { useState } from 'react'
import Navigation from './components/Navigation'
import Image from 'next/image'
import { getBackgroundForPath } from './utils/backgrounds'

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const backgroundImage = getBackgroundForPath('/')

  const chapters = [
    {
      id: 1,
      title: "Help Me Get This Bike!",
      host: "Mr. Fluffbutt",
      available: true,
    },
    {
      id: 2,
      title: "A Big Three Dollar Gamble",
      host: "Mr. Fluffbutt",
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
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Page Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>
      
      <div className="relative max-w-4xl mx-auto pt-36 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <div className="text-center mb-8">
            <h1 className="mb-4">Help Me Get This Bike!</h1>
            <p className="text-xl text-gray-600">
              Join Hudson on his journey to earn money for his dream bike!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/chapters/1" className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-2 border-blue-100 hover:border-blue-300">
                <h2 className="text-xl font-semibold mb-2">Chapter 1</h2>
                <p className="text-gray-600">Cat-Sitting Adventures with Mr. Fluffbutt</p>
              </div>
            </Link>

            <Link href="/chapters/2" className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-2 border-yellow-100 hover:border-yellow-300">
                <h2 className="text-xl font-semibold mb-2">Chapter 2</h2>
                <p className="text-gray-600">Pet-Sitting Business with Mr. Fluffbutt</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
