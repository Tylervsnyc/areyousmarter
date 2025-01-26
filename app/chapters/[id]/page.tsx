'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'

export default function ChapterPage() {
  const params = useParams()
  const router = useRouter()
  const chapterId = params.id

  const chapters = {
    '1': {
      title: "The Bike Shop",
      description: "Join Mr. Fluffbutt on his adventure at the bike shop and test your knowledge!",
      image: "/images/chapter1.jpg", // You'll need to add these images
    },
    '2': {
      title: "The Park",
      description: "Follow along as Mr. Fluffbutt explores the park and answer questions about his journey!",
      image: "/images/chapter2.jpg",
    }
  }

  const chapter = chapters[chapterId as keyof typeof chapters]

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chapter Not Found</h1>
          <p className="mb-4">This chapter isn't available yet. Check back soon!</p>
          <a href="/" className="text-blue-500 hover:underline">Return Home</a>
        </div>
      </div>
    )
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2">Chapter {chapterId}: {chapter.title}</h1>
        
        <div className="relative w-full h-64 mb-6">
          <Image
            src={chapter.image}
            alt={`Chapter ${chapterId} - ${chapter.title}`}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <p className="text-gray-600 mb-8">{chapter.description}</p>

        <div className="space-y-6">
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Ready to Begin?</h2>
            <p className="mb-4">Before we start the quiz, make sure you've read the story on Substack!</p>
            
            <div className="flex space-x-4">
              <a 
                href={`https://learnthroughstories.substack.com`} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Read the Story
              </a>
              
              <button 
                onClick={() => router.push(`/quiz/${chapterId}`)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Start the Quiz
              </button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
            <p>
              If you're having trouble or need assistance, feel free to reach out on 
              <a 
                href="https://learnthroughstories.substack.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline ml-1"
              >
                Substack
              </a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 