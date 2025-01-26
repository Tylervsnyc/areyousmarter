'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'

export default function QuizResults() {
  const [userName, setUserName] = useState('')
  const [score, setScore] = useState<number | null>(null)
  const router = useRouter()
  const params = useParams()
  const chapterId = params.id as string

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
      
      <div className="max-w-4xl mx-auto pt-48 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-6">Quiz Results</h1>
          
          <p className="text-xl mb-4">
            Hi {userName}! You scored:
          </p>
          
          <div className="text-4xl font-bold mb-8">
            {score} out of 10
          </div>

          {/* Temporarily show certificate option always for testing */}
          <div className="space-y-6">
            <p className="text-green-600 text-xl">
              Testing Certificate Generation
            </p>
            
            <button
              onClick={generateCertificate}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Download Test Certificate
            </button>
          </div>

          <div className="mt-8 space-x-4">
            <button
              onClick={() => router.push(`/quiz/${chapterId}`)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
            
            <button
              onClick={() => router.push('/')}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </main>
  )
} 