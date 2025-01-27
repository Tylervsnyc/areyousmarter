'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import { getBackgroundForPath } from '@/app/utils/backgrounds'
import Link from 'next/link'

export default function QuizResults() {
  const [userName, setUserName] = useState('')
  const [score, setScore] = useState<number | null>(null)
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string
  const backgroundImage = getBackgroundForPath(`/quiz/${chapterId}/results`)

  useEffect(() => {
    const name = sessionStorage.getItem('userName')
    const quizScore = sessionStorage.getItem('quizScore')
    
    if (!name || !quizScore) {
      router.push(`/quiz/${chapterId}`)
      return
    }
    
    setUserName(name)
    setScore(parseInt(quizScore))
  }, [chapterId, router])

  const generateCertificate = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Create a new image for the certificate template
    const img = new window.Image()
    img.onload = () => {
      // Set canvas size to match template
      canvas.width = img.width
      canvas.height = img.height

      // Draw the certificate template
      ctx.drawImage(img, 0, 0)

      // Configure text style
      ctx.fillStyle = '#000'
      ctx.textAlign = 'center'

      // Add all text on one line
      ctx.font = 'bold 48px Arial'
      const date = new Date().toLocaleDateString()
      const certificateText = `${userName}, Chapter ${chapterId}, ${date}`
      ctx.fillText(certificateText, canvas.width / 2, canvas.height / 2)

      // Download certificate
      const link = document.createElement('a')
      link.download = `certificate-chapter-${chapterId}.png`
      link.href = canvas.toDataURL()
      link.click()
    }

    // Load the certificate template
    img.src = '/images/cert.jpg'
  }

  if (score === null) {
    return <div>Loading...</div>
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
      
      <div className="relative max-w-4xl mx-auto pt-48 p-8">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 prose prose-lg max-w-none">
          <h2 className="m-0 text-center">Quiz Complete!</h2>
          
          {score === 10 && (
            <div className="relative my-8 text-center">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/4 top-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-firework-1"></div>
                <div className="absolute left-1/2 top-1/3 w-4 h-4 bg-pink-400 rounded-full animate-firework-2"></div>
                <div className="absolute right-1/4 top-2/3 w-4 h-4 bg-purple-400 rounded-full animate-firework-3"></div>
                <div className="absolute left-1/3 top-1/4 w-4 h-4 bg-green-400 rounded-full animate-firework-1 delay-300"></div>
                <div className="absolute right-1/3 top-3/4 w-4 h-4 bg-blue-400 rounded-full animate-firework-2 delay-500"></div>
              </div>
              <h3 className="text-3xl font-bold mb-4 animate-golden-pulse">
                🎉 Perfect Score! You&apos;ve earned a certificate! 🎉
              </h3>
              <button
                onClick={generateCertificate}
                className="px-8 py-3 text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200 animate-golden-glow mb-8"
              >
                Download Your Certificate
              </button>
            </div>
          )}

          <h3 className="text-2xl font-bold text-center mb-6">
            You got {score} out of 10 questions correct!
          </h3>

          <div className="flex flex-col items-center space-y-4 mt-8">
            {score < 10 && (
              <p className="text-center text-lg mb-4">
                Keep practicing! You&apos;re getting better every time.
              </p>
            )}
            
            <Link
              href={`/quiz/${chapterId}`}
              className="px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              Try Again
            </Link>
            
            <Link
              href="/"
              className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 