'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import { getBackgroundForPath } from '../../utils/backgrounds'
import { useParams } from 'next/navigation'

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
    host: "Mr. Fluffbutt",
    title: "Help Me Get This Bike!",
    intro: "Meet Hudson, a determined young human who dreams of owning a shiny new bike. But bikes aren't cheap - this one costs $500! Hudson has decided to start a cat-sitting business to earn money. Let's help him track his progress and solve some money math problems along the way!",
    image: "/images/mrfb.jpg",
    style: "imperial",
    description: "Mr. Fluffbutt is a regal Persian cat who considers himself royalty. Despite his sassy attitude, he secretly enjoys helping children learn math - though he'd never admit it!"
  },
  '2': {
    host: "Mr. Fluffbutt",
    title: "A Big Three Dollar Gamble",
    intro: "Welcome to my kingdom of knowledge, tiny humans! I shall test your mathematical prowess in Hudson's pet-sitting enterprise. Dare to challenge the greatest feline mind?",
    image: "/images/mrfb.jpg",
    style: "imperial",
    description: "Mr. Fluffbutt is a regal Persian cat who considers himself royalty. Despite his sassy attitude, he secretly enjoys helping children learn math - though he'd never admit it!"
  }
}

export default function ChapterHome() {
  const params = useParams()
  const id = params?.id as string
  const chapter = chapters[id]
  
  if (!chapter) {
    return <div>Chapter not found</div>
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={getBackgroundForPath(`/quiz/${id}`)}
          alt="Page Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

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
      
      <div className="relative max-w-4xl mx-auto pt-48 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <div className="text-center mb-8">
            <h1 className="mb-4">Are You Smarter Than Mr. Fluffbutt?</h1>
            <p className="text-xl text-gray-600">
              Welcome to Chapter {id} of {chapter.title}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Meet Your Host: {chapter.host}</h2>
            <p className="text-gray-600 mb-4">{chapter.description}</p>
          </div>

          <div className="flex justify-center">
            <Link 
              href={`/quiz/${id}/name`}
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              role="button"
              tabIndex={0}
              aria-label="Begin your adventure"
            >
              Begin Your Adventure
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 