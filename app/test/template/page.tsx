'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ChapterTemplateProps {
  title?: string
  subtitle?: string
  readStoryLink?: string
  beginQuizLink?: string
  chapterNumber?: number
  backgroundOpacity?: number
}

export default function ChapterTemplate() {
  const [settings, setSettings] = useState<ChapterTemplateProps>({
    title: "Are You Smarter Than Mr. Fluffbutt?",
    subtitle: "Chapter 1: Help Me Get This Bike!",
    readStoryLink: "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-1",
    beginQuizLink: "/quiz/1/name",
    chapterNumber: 1,
    backgroundOpacity: 0.8
  })

  return (
    <div className="min-h-screen flex flex-col">
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
      <div className="flex-1 relative">
        {/* Background Image */}
        <Image
          src="/images/backgrounds/bg1.jpg"
          alt="Watercolor Background"
          fill
          className="object-cover"
          priority
        />

        {/* Content Overlay */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8"
          style={{ backgroundColor: `rgb(252, 250, 245, ${settings.backgroundOpacity})` }}
        >
          {/* Title Box */}
          <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-4 max-w-lg w-full mx-auto mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
              {settings.title}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center mt-2">
              {settings.subtitle}
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex flex-col w-full max-w-md gap-4 px-4 mx-auto">
            <Link href={settings.readStoryLink || '#'}>
              <button className="w-full py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all">
                Read the Story
              </button>
            </Link>
            <Link href={settings.beginQuizLink || '#'}>
              <button className="w-full py-3 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all">
                Begin Quiz
              </button>
            </Link>
          </div>

          {/* Mr. Fluffbutt Image */}
          <div className="w-32 h-32 relative animate-[bounce_3s_ease-in-out_infinite] mx-auto mt-8">
            <div className="absolute inset-0 rounded-full border-4 border-yellow-400 overflow-hidden">
              <Image
                src="/images/mrfb.jpg"
                alt="Mr. Fluffbutt"
                fill
                className="object-cover animate-[wiggle_2s_ease-in-out_infinite]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-4 shadow-lg">
          <h3 className="font-bold mb-2">Live Settings</h3>
          <div className="space-y-2">
            <div>
              <label className="block text-sm">Background Opacity</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={settings.backgroundOpacity}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  backgroundOpacity: parseFloat(e.target.value)
                }))}
                className="w-full"
              />
              <span className="text-sm">{settings.backgroundOpacity}</span>
            </div>
            {/* Add more controls as needed */}
          </div>
        </div>
      </div>
    </div>
  )
} 