import Navigation from './components/Navigation'
import Image from 'next/image'
import { getBackgroundForPath } from './utils/backgrounds'
import StoryCard from './components/StoryCard'
import BackgroundPattern from './components/BackgroundPattern'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/header.jpg"
          alt="Page Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      <div className="relative max-w-6xl mx-auto pt-24 sm:pt-48 p-4 sm:p-8">
        <div className="relative bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-8 prose prose-lg max-w-none overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-pattern-paper pattern-blend opacity-50" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-12">
              <h1 className="mb-2 sm:mb-4">Welcome to Learn Through Stories!</h1>
              <p className="text-lg sm:text-xl text-gray-600">
                Choose a story and start your learning adventure!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <StoryCard 
                title="Help Me Get This Bike"
                coverImage="/images/hmgtbcover.jpg"
                subject="Math and Entrepreneurship"
                ageRange="5-10 years"
                content="Stories and Interactive Game Show"
                chaptersAvailable={3}
                chapters={[
                  {
                    title: "Chapter 1: Help Me Get This Bike!",
                    description: "Join Hudson on his journey to earn money for his dream bike!",
                    href: "/quiz/1"
                  },
                  {
                    title: "Chapter 2: A Big Three Dollar Gamble",
                    description: "Test your math skills in Mr. Fluffbutt's royal kingdom!",
                    href: "/quiz/2"
                  },
                  {
                    title: "Chapter 3: Let it Roll! Let it Roll!",
                    description: "Join Mr. Fluffbutt for more money math adventures!",
                    href: "/quiz/3"
                  }
                ]}
              />

              {/* The Garden of Growing Hearts */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                <div className="relative w-full aspect-[4/3] mb-3 sm:mb-4">
                  <Image
                    src="/images/goghcover.jpg"
                    alt="The Garden of Growing Hearts Cover"
                    fill
                    className="object-contain rounded-lg"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">The Garden of Growing Hearts</h2>
                <p className="text-sm text-green-600 mb-1 sm:mb-2">Subject: Empathy, Inclusion, and Overcoming Your Own Strengths</p>
                <p className="text-sm text-gray-600 mb-1 sm:mb-2">Age Range: 3-7 years</p>
                <p className="text-sm text-gray-600 mb-2 sm:mb-4">Content: Stories and Exercises</p>
                <p className="text-gray-500 italic">Coming Soon!</p>
              </div>

              {/* Junk's Adventures */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md transition-shadow p-4 sm:p-6 border-2 border-gray-100 opacity-75">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">Junk&apos;s Adventures</h2>
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <p className="text-sm text-gray-600">Subject: Addition & Subtraction</p>
                  <p className="text-sm text-gray-600">Age Range: Coming Soon</p>
                  <p className="text-sm text-gray-600">Content: Interactive Stories</p>
                </div>
                <p className="text-gray-600 mb-3 sm:mb-4">Join Junk on exciting mathematical journeys!</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Coming Soon</span>
                  <span className="px-2 sm:px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">Stay Tuned!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
