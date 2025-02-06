'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MagicProgressBar from '@/components/MagicProgressBar'

export default function SortingTest() {
  return (
    <div className="min-h-screen bg-[rgb(252,250,245)]">
      {/* Header */}
      <div className="relative h-[12vh] w-full">
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
              width={80}
              height={20}
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
              width={60}
              height={15}
              priority
            />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-1.5">
        {/* Main container */}
        <div className="max-w-2xl mx-auto flex flex-col gap-1.5">
          
          {/* Progress Bar */}
          <div className="scale-90 origin-top">
            <MagicProgressBar
              currentQuestion={1}
              totalQuestions={6}
            />
          </div>

          {/* Question Box */}
          <div className="bg-white/90 rounded-lg border-2 border-yellow-400 p-1.5 max-w-lg w-full mx-auto">
            <h1 className="text-sm font-bold text-gray-900 text-center">
              Sort the Animals
            </h1>
          </div>
          
          {/* Top section with two columns */}
          <div className="flex flex-col sm:flex-row justify-center gap-1.5 sm:gap-4">
            {/* Left Column - Safe Animals */}
            <div className="w-full sm:w-44 border-2 border-green-400 rounded-lg bg-white/80 p-1">
              <h2 className="text-sm font-bold text-green-600 text-center mb-1">
                Safe Animals
              </h2>
              <div className="flex flex-col gap-1">
                {/* Placeholder boxes for dropped items */}
                <div className="h-7 border border-dashed border-green-300 rounded"></div>
                <div className="h-7 border border-dashed border-green-300 rounded"></div>
                <div className="h-7 border border-dashed border-green-300 rounded"></div>
              </div>
            </div>

            {/* Right Column - Danger Zone */}
            <div className="w-full sm:w-44 border-2 border-red-400 rounded-lg bg-white/80 p-1">
              <h2 className="text-sm font-bold text-red-600 text-center mb-1">
                Danger Zone
              </h2>
              <div className="flex flex-col gap-1">
                {/* Placeholder boxes for dropped items */}
                <div className="h-7 border border-dashed border-red-300 rounded"></div>
                <div className="h-7 border border-dashed border-red-300 rounded"></div>
                <div className="h-7 border border-dashed border-red-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Bottom section with draggable items */}
          <div className="h-20 bg-white/90 rounded-lg border-2 border-yellow-400 p-1">
            <div className="grid grid-cols-3 gap-1 h-full">
              {/* Draggable items - all in blue theme */}
              <div className="h-7 bg-blue-100 rounded border border-blue-300 flex items-center justify-center text-xs font-medium p-0.5 text-center">
                T-Rex 🦖
              </div>
              <div className="h-7 bg-blue-100 rounded border border-blue-300 flex items-center justify-center text-xs font-medium p-0.5 text-center">
                Mouse 🐭
              </div>
              <div className="h-7 bg-blue-100 rounded border border-blue-300 flex items-center justify-center text-xs font-medium p-0.5 text-center">
                Crocodile 🐊
              </div>
              <div className="h-7 bg-blue-100 rounded border border-blue-300 flex items-center justify-center text-xs font-medium p-0.5 text-center">
                Goldfish 🐠
              </div>
              <div className="h-7 bg-blue-100 rounded border border-blue-300 flex items-center justify-center text-xs font-medium p-0.5 text-center">
                Hamster 🐹
              </div>
              <div className="h-7 bg-blue-100 rounded border border-blue-300 flex items-center justify-center text-xs font-medium p-0.5 text-center">
                Wolf 🐺
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 