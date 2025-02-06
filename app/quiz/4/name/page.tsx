'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const nameQuips = [
  "What's your name, tiny mathematician?",
  "Who dares to challenge me?",
  "State your name, brave one!",
  "Your name, if you please!",
  "Identify yourself, number cruncher!",
  "What shall I call you?",
  "Name required for royal records!",
  "You are called...?",
  "Your title, math warrior?",
  "By what name are you known?"
]

export default function NameEntryPage() {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const [randomQuip] = useState(() => {
    return nameQuips[Math.floor(Math.random() * nameQuips.length)]
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim()) {
      setError("Even a sleeping cat knows their name! Try again!")
      return
    }

    if (name.length > 20) {
      setError("That's longer than my tail! Keep it shorter!")
      return
    }

    // Route to age selection with name
    router.push(`/quiz/4/age?name=${encodeURIComponent(name.trim())}`)
  }

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
      <div className="flex-1 relative bg-[rgb(252,250,245,0.8)]">
        {/* Background Image */}
        <Image
          src="/images/backgrounds/bg1.jpg"
          alt="Watercolor Background"
          fill
          className="object-cover -z-10"
          priority
        />

        {/* Content Container */}
        <div className="h-full flex flex-col items-center justify-center gap-4 px-4 py-6">
          {/* Title Box */}
          <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-2 sm:p-3 max-w-lg w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
              The Worst Week EVER!
            </h1>
          </div>

          {/* Name Entry Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <div className="bg-white/90 rounded-xl border-4 border-blue-400 p-2 sm:p-3">
              <label className="block text-lg sm:text-xl text-blue-600 text-center font-medium mb-2">
                {randomQuip}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setError('')
                }}
                className="w-full px-3 py-2 text-lg border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your name..."
              />
            </div>

            {error && (
              <div className="bg-red-100 border-2 border-red-400 rounded-lg p-2">
                <p className="text-red-600 text-center">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all"
            >
              Let's Begin!
            </button>
          </form>

          {/* Mr. Fluff Butt Image */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 relative animate-[bounce_3s_ease-in-out_infinite]">
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