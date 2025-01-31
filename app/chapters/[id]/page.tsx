'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import { getBackgroundForPath } from '@/app/utils/backgrounds'

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
  const backgroundImage = getBackgroundForPath(`/chapters/${chapterId}`)

  const chapters: ChapterData = {
    '1': {
      host: "Mr. Fluffbutt",
      title: "Cat-Sitting Adventures",
      intro: "So, you want to test your mathematical abilities against mine? Ha! I suppose I can grace you with my genius while Hudson attempts to earn money for that ridiculous bike. Let's see if your human brain can handle even the simplest calculations about his... progress.",
      image: "/images/mrfb.jpg",
      style: "imperial",
      description: "A grumpy but genius white cat who judges your mathematical abilities with his superior feline intellect."
    },
    '2': {
      host: "Mr. Fluffbutt",
      title: "Pet-Sitting Business",
      intro: "Welcome to my kingdom of knowledge, tiny humans! I shall test your mathematical prowess in Hudson's pet-sitting enterprise. Dare to challenge the greatest feline mind?",
      image: "/images/mrfb.jpg",
      style: "imperial",
      description: "A grumpy Persian cat who considers himself royalty, testing your math skills with imperial flair."
    },
    '3': {
      host: "Mr. Fluffbutt",
      title: "Let it Roll! Let it Roll!",
      intro: "Back for more mathematical challenges? Well, well... I suppose your determination is almost as impressive as my whiskers. Let's see if you can handle these money puzzles!",
      image: "/images/mrfb.jpg",
      style: "imperial",
      description: "The royal mathematician returns with more money math challenges and a dash of feline sass!"
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
        <div className={`bg-white rounded-lg shadow-lg p-8 prose prose-lg ${
          chapter.style === 'imperial' ? 'prose-imperial' : ''
        } max-w-none`}>
          <div className="text-center mb-8">
            <h1 className="mb-2">Chapter {chapterId}: {chapter.title}</h1>
            <h2 className="text-gray-600">with {chapter.host}</h2>
            {chapter.description && (
              <p className="text-sm text-gray-500 mt-2 italic">{chapter.description}</p>
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
              <p className="text-center">
                {chapter.intro}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href={chapterId === '1' 
                ? "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-1"
                : chapterId === '2' 
                  ? "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-2"
                  : "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-3"
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white px-8 py-3 rounded-lg text-lg transition-all hover:scale-105 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]`}
            >
              Read the Story
            </a>

            <button
              onClick={() => router.push(`/quiz/${chapterId}`)}
              className={`text-white px-8 py-3 rounded-lg text-lg transition-all hover:scale-105 ${
                chapter.style === 'imperial' 
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:shadow-[0_0_20px_rgba(234,179,8,0.7)]' 
                  : 'bg-blue-500 hover:bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]'
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