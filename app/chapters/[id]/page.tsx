'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'

interface BaseChapter {
  host: string;
  title: string;
  intro: string;
  image: string;
  style?: 'imperial';
  description?: string;
}

type ChapterData = Record<string, BaseChapter>

export default function ChapterIntro() {
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string

  const chapters: ChapterData = {
    '1': {
      host: "Mr. Fluffbutt",
      title: "Cat-Sitting Adventures",
      intro: "*Settles on special perch with disdain* So, you want to test your mathematical abilities against mine? Ha! I suppose I can grace you with my genius while Hudson attempts to earn money for that ridiculous bike. *Flicks tail dismissively* Let's see if your human brain can handle even the simplest calculations about his... progress. *yawns*",
      image: "/images/mrfb.jpg",
      style: "imperial",
      description: "A grumpy but genius white cat, perched regally on his throne while judging your mathematical abilities with his superior feline intellect."
    },
    '2': {
      host: "Mr. Fluffbutt",
      title: "Pet-Sitting Business",
      intro: "*Settles on velvet throne* Welcome to my kingdom of knowledge, tiny humans! I shall test your mathematical prowess in Hudson&apos;s pet-sitting enterprise. *Adjusts crown* Dare to challenge the greatest feline mind?",
      image: "/images/mrfb.jpg",
      style: "imperial",
      description: "A grumpy Persian cat who considers himself royalty, sitting on a velvet throne and judging your math skills with imperial flair."
    }
  }

  const chapter = chapters[chapterId]

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chapter Not Found</h1>
          <p className="mb-4">This chapter isn&apos;t available yet. Check back soon!</p>
          <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <div className="absolute top-0 left-0 w-full h-32">
        <Image
          src="/images/header.jpg"
          alt="Chapter Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </div>
      
      <div className="max-w-4xl mx-auto pt-36 p-8">
        <div className={`bg-white rounded-lg shadow-lg p-8 prose prose-lg ${
          chapter.style === 'imperial' ? 'prose-imperial' : ''
        } max-w-none`}>
          <div className="text-center mb-8">
            <h1 className="mb-2 px-4">Chapter {chapterId}: {chapter.title}</h1>
            <h2 className="text-gray-600">with {chapter.host}</h2>
            {chapter.description && (
              <p className="text-sm text-gray-500 mt-2 italic px-4">{chapter.description}</p>
            )}
          </div>

          <div className="flex flex-col items-center mb-8">
            <div className="relative w-48 h-48 mb-6">
              <Image
                src={chapter.image}
                alt={chapter.host}
                fill
                className={`object-cover rounded-full ${chapter.style === 'imperial' ? 'border-4 border-yellow-400 shadow-lg' : ''}`}
              />
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-center px-4 sm:px-0">
                {chapter.intro}
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => router.push(`/quiz/${chapterId}`)}
              className={`text-white px-8 py-3 rounded-lg text-lg transition-all hover:scale-105 ${
                chapter.style === 'imperial' 
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700' 
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              Begin the Quiz!
            </button>
          </div>
        </div>
      </div>
    </main>
  )
} 