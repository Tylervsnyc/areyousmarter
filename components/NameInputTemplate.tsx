'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface NameInputTemplateProps {
  chapterNumber: string | number
}

export default function NameInputTemplate({ chapterNumber }: NameInputTemplateProps) {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      router.push(`/quiz/${chapterNumber}/age?name=${encodeURIComponent(name.trim())}`)
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Header */}
      <div className="relative h-32 w-full">
        <Image
          src="/images/header.jpg"
          alt="Header Background"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Logo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Link href="https://www.learnthroughstories.com/">
            <Image
              src="/images/logo.png"
              alt="Learn Through Stories"
              width={120}
              height={30}
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
              width={100}
              height={25}
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
        <div className="relative z-10 flex flex-col items-center px-4 py-4 md:px-6 md:py-8 space-y-4 md:space-y-8">
          {/* Title Box */}
          <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-4 md:p-6 max-w-lg w-full mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
              What&apos;s Your Name?
            </h1>
          </div>

          {/* Name Input Form */}
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label htmlFor="name" className="block text-xl text-gray-700 text-center">
                  Enter your name to begin the adventure
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-lg border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Your name here..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 md:py-4 text-lg md:text-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all
                         animate-[pulse_2s_ease-in-out_infinite] hover:animate-none"
              >
                Continue to Age Selection
              </button>
            </form>
          </div>

          {/* Mr. Fluffbutt Image */}
          <div className="w-36 h-36 md:w-64 md:h-64 relative animate-[bounce_3s_ease-in-out_infinite] mx-auto">
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
      </div>
    </div>
  )
} 