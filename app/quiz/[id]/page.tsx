'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../components/Navigation'

interface BaseChapter {
  host: string;
  title: string;
  intro: string;
  image: string;
  style: string;
  description: string;
}

type ChapterData = Record<string, BaseChapter>;

const chapters: ChapterData = {
  '1': {
    host: "Ms. Paws",
    title: "Hudson's Bike Goal",
    intro: "Meet Hudson, a determined young human who dreams of owning a shiny new bike. But bikes aren't cheap - this one costs $500! Hudson has decided to start a cat-sitting business to earn money. Let's help him track his progress and solve some money math problems along the way!",
    image: "/images/ms-paws.jpg",
    style: "friendly",
    description: "Ms. Paws is a wise and encouraging tabby cat who loves helping young entrepreneurs understand money and math. She's excited to guide Hudson on his journey to earn enough for his dream bike!"
  },
  '2': {
    host: "Mr. Fluffbutt",
    title: "Pet-Sitting Business",
    intro: "Greetings, tiny humans! I am Mr. Fluffbutt, the most distinguished Persian cat in all the land. *adjusts crown* I've been informed that you wish to test your mathematical prowess against my superior feline intellect. Very well, let us see if you're worthy of my attention!",
    image: "/images/mr-fluffbutt.jpg",
    style: "imperial",
    description: "Mr. Fluffbutt is a regal Persian cat who considers himself royalty. Despite his sassy attitude, he secretly enjoys helping children learn math - though he'd never admit it!"
  }
}

export default function QuizStart() {
  const [name, setName] = useState('')
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      // Store name in sessionStorage for use throughout quiz
      sessionStorage.setItem('userName', name.trim())
      router.push(`/quiz/${chapterId}/age`)
    }
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <div className="absolute top-0 left-0 w-full h-48">
        <Image
          src="/images/header.jpg"
          alt="Chapter Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </div>
      
      <div className="max-w-4xl mx-auto pt-24 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center px-4">
            {chapterId === '2' ? (
              "State Your Name, Tiny Subject!"
            ) : (
              `Welcome to Chapter ${chapterId}!`
            )}
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg mb-2 text-center px-4">
                {chapterId === '2' ? (
                  "*Adjusts crown while waiting regally* By what name shall I address you in my mathematical kingdom?"
                ) : (
                  "What's your first name?"
                )}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className={`px-6 py-2 rounded-lg text-white transition-colors ${
                  chapterId === '2'
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {chapterId === '2' ? "Present Thyself" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
} 