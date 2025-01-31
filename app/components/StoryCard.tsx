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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="relative w-full aspect-[4/3] mb-4">
        <Image
          src={coverImage}
          alt={`${title} Cover`}
          fill
          className="object-contain rounded-lg"
          priority
          onError={(e) => {
            console.error('Error loading image:', e)
            e.currentTarget.style.display = 'none'
          }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-blue-600 mb-2">Subject: {subject}</p>
      <p className="text-sm text-gray-600 mb-2">Age Range: {ageRange}</p>
      <p className="text-sm text-gray-600 mb-4">Content: {content}</p>
      
      {/* Chapter Selection */}
      <div className="space-y-4">
        <div 
          className="p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
          onClick={handleDropdownToggle}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-expanded={isDropdownOpen}
          aria-controls="chapters-list"
        >
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-medium">{chaptersAvailable} Chapters Available</span>
            <svg 
              className={`w-5 h-5 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        {isDropdownOpen && (
          <div 
            id="chapters-list"
            className="space-y-2"
            role="menu"
          >
            {chapters.map((chapter, index) => (
              <Link 
                key={chapter.href}
                href={chapter.href}
                className="block p-3 bg-white rounded-lg border-2 border-gray-100 hover:border-blue-500 transition-colors"
                role="menuitem"
                tabIndex={0}
                aria-label={`Start ${chapter.title}`}
              >
                <h3 className="font-semibold text-gray-900">{chapter.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{chapter.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 