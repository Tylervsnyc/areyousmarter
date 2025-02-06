'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MagicProgressBar from '@/components/MagicProgressBar'

export default function SortingTest() {
  return (
    <div className="min-h-screen bg-[rgb(252,250,245)]">
      {/* Header */}
      <div className="relative h-[15vh] w-full">
        <Image
          src="/images/header.jpg"
          alt="Header Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Logo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Link href="https://www.learnthroughstories.com/">
            <Image
              src="/images/logo.png"
              alt="Learn Through Stories"
              width={100}
              height={25}
              priority
            />
          </Link>
        </div>
        {/* Substack */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <Link href="https://learnthroughstories.substack.com/">
            <Image
              src="/images/substack.jpg"
              alt="Subscribe to Learn Through Stories"
              width={80}
              height={20}
              priority
            />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-2 sm:p-4">
        {/* Main container */}
        <div className="max-w-4xl mx-auto flex flex-col gap-2 sm:gap-4">
          
          {/* Progress Bar */}
          <MagicProgressBar
            currentQuestion={1}
            totalQuestions={6}
          />

          {/* Question Box */}
          <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-3 max-w-lg w-full mx-auto">
            <h1 className="text-lg md:text-xl font-bold text-gray-900 text-center">
              Sort the animals into Safe and Dangerous groups!
            </h1>
          </div>
          
          {/* Top section with two columns */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-8">
            {/* Left Column - Safe Animals */}
            <div className="w-full sm:w-64 border-4 border-green-400 rounded-xl bg-white/80 p-2">
              <h2 className="text-lg sm:text-xl font-bold text-green-600 text-center mb-2">
                Safe Animals
              </h2>
              <div className="flex flex-col gap-2">
                {/* Placeholder boxes for dropped items */}
                <div className="h-10 sm:h-12 border-2 border-dashed border-green-300 rounded-lg"></div>
                <div className="h-10 sm:h-12 border-2 border-dashed border-green-300 rounded-lg"></div>
                <div className="h-10 sm:h-12 border-2 border-dashed border-green-300 rounded-lg"></div>
              </div>
            </div>

            {/* Right Column - Danger Zone */}
            <div className="w-full sm:w-64 border-4 border-red-400 rounded-xl bg-white/80 p-2">
              <h2 className="text-lg sm:text-xl font-bold text-red-600 text-center mb-2">
                Danger Zone Animals
              </h2>
              <div className="flex flex-col gap-2">
                {/* Placeholder boxes for dropped items */}
                <div className="h-10 sm:h-12 border-2 border-dashed border-red-300 rounded-lg"></div>
                <div className="h-10 sm:h-12 border-2 border-dashed border-red-300 rounded-lg"></div>
                <div className="h-10 sm:h-12 border-2 border-dashed border-red-300 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Bottom section with draggable items */}
          <div className="h-32 sm:h-36 bg-white/90 rounded-xl border-4 border-yellow-400 p-2 sm:p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 h-full">
              {/* Draggable items - all in blue theme */}
              <div className="h-10 sm:h-12 bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
                T-Rex 🦖
              </div>
              <div className="h-10 sm:h-12 bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
                Mouse 🐭
              </div>
              <div className="h-10 sm:h-12 bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
                Crocodile 🐊
              </div>
              <div className="h-10 sm:h-12 bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
                Goldfish 🐠
              </div>
              <div className="h-10 sm:h-12 bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
                Hamster 🐹
              </div>
              <div className="h-10 sm:h-12 bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
                Wolf 🐺
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 