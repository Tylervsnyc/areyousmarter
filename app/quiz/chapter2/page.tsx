'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Chapter2Page() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Header Image Container */}
      <div className="relative h-32 w-full">
        <Image
          src="/images/header.jpg"
          alt="Header Background"
          fill
          className="object-cover object-top"
          priority
          quality={100}
        />
        {/* Logo */}
        <div className="absolute top-2 left-4">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={30}
            priority
          />
        </div>
        {/* Substack */}
        <div className="absolute top-2 right-4">
          <Link href="https://learnthrough.substack.com">
            <Image
              src="/images/substack.jpg"
              alt="Subscribe to Learn Through Stories"
              width={120}
              height={30}
              priority
            />
          </Link>
        </div>
      </div>

      {/* Background Image */}
      <div className="fixed inset-0 z-0 mt-32">
        <Image
          src="/images/backgrounds/bg1.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-4 py-8 relative z-10">
        {/* Title Section */}
        <div className="text-center space-y-4 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 p-6 rounded-lg animate-pulse border-4 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)] bg-white/80">
            Are You Smarter Than Mr. Fluff Butt?
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 bg-white/80 p-2 rounded-lg">
            Chapter 2: A Big Three Dollar Gamble
          </h2>
        </div>

        {/* Mr. Fluff Butt Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full border-4 border-yellow-400 overflow-hidden shadow-lg">
          <Image
            src="/images/mrfb.jpg"
            alt="Mr. Fluff Butt"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-full max-w-xs gap-4">
          <Link 
            href="/story" 
            className="w-full py-3 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl shadow-md transition-all text-center"
          >
            Read the Story
          </Link>
          <Link 
            href="/quiz" 
            className="w-full py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-all text-center"
          >
            Begin Your Adventure
          </Link>
        </div>
      </div>
    </div>
  )
} 