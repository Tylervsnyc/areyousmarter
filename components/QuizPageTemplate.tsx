'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { trackUserProgress } from '@/app/utils/analytics'

interface QuizPageTemplateProps {
  title: string
  subtitle: string
  readStoryLink: string
  beginQuizLink: string
}

export default function QuizPageTemplate({
  title,
  subtitle,
  readStoryLink,
  beginQuizLink,
}: QuizPageTemplateProps) {
  const router = useRouter()

  const handleStartQuiz = () => {
    // Extract chapter number from beginQuizLink (e.g., "/quiz/1/name" -> "1")
    const chapter = beginQuizLink.split('/')[2]
    trackUserProgress('start_quiz', chapter)
    router.push(beginQuizLink)
  }

  return (
    <div className="min-h-screen bg-[url('/images/backgrounds/bg1.jpg')] bg-cover bg-center">
      <div className="min-h-screen bg-white/30 flex flex-col items-center justify-start">
        <header className="w-full h-20 flex items-center justify-between px-4 md:px-8">
          <Image
            src="/images/logo.png"
            alt="Are You Smarter Than Mr. Fluffbutt?"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <Link href={readStoryLink} target="_blank">
            <Image
              src="/images/substack.jpg"
              alt="Read on Substack"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </Link>
        </header>

        <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center justify-start space-y-3 pt-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">{title}</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-center">{subtitle}</h2>

          <div className="flex flex-col items-center space-y-6 mt-4">
            <Image
              src="/images/mrfb.jpg"
              alt="Mr. Fluffbutt"
              width={48}
              height={48}
              className="w-48 h-48 rounded-full"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={readStoryLink} target="_blank">
                <button className="w-full sm:w-auto px-6 py-2 text-sm font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition-all">
                  Read the Story
                </button>
              </Link>
              <button
                onClick={handleStartQuiz}
                className="w-full sm:w-auto px-6 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
              >
                Begin the Quiz
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 