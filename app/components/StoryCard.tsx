'use client'

import { useState, MouseEvent } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Chapter {
  title: string
  description: string
  href: string
}

interface StoryCardProps {
  title: string
  coverImage: string | StaticImageData
  subject: string
  ageRange: string
  content: string
  chaptersAvailable: number
  chapters: Chapter[]
}

export default function StoryCard({
  title,
  coverImage,
  subject,
  ageRange,
  content,
  chaptersAvailable,
  chapters
}: StoryCardProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdownToggle = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="relative">
      <div 
        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
        onClick={handleDropdownToggle}
      >
        <div className="relative w-full h-48 mb-4">
          <Image
            src={coverImage}
            alt={`${title} Cover`}
            fill
            className="object-cover rounded-lg"
            priority
            onError={(e) => {
              console.error('Error loading image:', e);
              // Fallback to a placeholder or show error state
              e.currentTarget.style.display = 'none';
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-blue-600 mb-2">Subject: {subject}</p>
        <p className="text-sm text-gray-600 mb-2">Age Range: {ageRange}</p>
        <p className="text-sm text-gray-600 mb-4">Content: {content}</p>
        <div className="flex items-center justify-between">
          <span className="text-blue-600">{chaptersAvailable} Chapters Available</span>
          <svg 
            className={`w-5 h-5 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
          {chapters.map((chapter, index) => (
            <Link 
              key={chapter.href}
              href={chapter.href} 
              className={`block p-4 hover:bg-blue-50 ${
                index < chapters.length - 1 ? 'border-b' : ''
              }`}
            >
              <h3 className="font-semibold">{chapter.title}</h3>
              <p className="text-sm text-gray-600">{chapter.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 