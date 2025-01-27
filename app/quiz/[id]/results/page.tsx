'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import { getBackgroundForPath } from '@/app/utils/backgrounds'

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
        <div className="bg-white rounded-lg shadow-lg p-8 text-center prose prose-lg max-w-none">
          <h1 className="mb-6">Quiz Results</h1>
          
          <p className="mb-4">
            Hi {userName}! You scored:
          </p>
          
          <div className="text-4xl font-bold mb-8">
            {score} out of 10
          </div>

          {score === 10 ? (
            <div className="space-y-6 relative">
              {/* Fireworks effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 animate-firework-1"></div>
                <div className="absolute top-0 right-1/4 w-2 h-2 bg-yellow-400 animate-firework-2"></div>
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-400 animate-firework-3"></div>
              </div>
              
              <p className="text-yellow-600 animate-golden-pulse">
                🎉 Perfect Score! You&apos;ve earned a certificate! 🎉
              </p>
              
              <button
                onClick={generateCertificate}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105 animate-golden-glow"
              >
                Download Certificate
              </button>
            </div>
          ) : (
            <p className="text-gray-600 mb-8">
              Keep practicing! You need all 10 correct answers to earn a certificate.
            </p>
          )}

          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={() => router.push(`/quiz/${chapterId}`)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors w-48"
            >
              Try Again
            </button>
            
            <button
              onClick={() => router.push('/')}
              className="bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors w-48"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </main>
  )
} 