'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      const link = e.currentTarget as HTMLAnchorElement
      link.click()
    }
  }

  const handleChapterSelect = (chapterId: string) => {
    setIsOpen(false)
    router.push(`/quiz/${chapterId}`)
  }

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-6" role="navigation" aria-label="Main navigation">
      {/* Logo/Home Link */}
      <a 
        href="https://www.learnthroughstories.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all hover:scale-105 ml-4"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Visit Learn Through Stories website"
      >
        <Image 
          src="/images/logo.png"
          alt="Learn Through Stories"
          width={128}
          height={128}
          priority
        />
      </a>

      {/* Chapter Selector */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          Select Chapter
        </button>
        
        {isOpen && (
          <div 
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="chapter-menu"
          >
            <button
              onClick={() => handleChapterSelect('1')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Chapter 1
            </button>
            <button
              onClick={() => handleChapterSelect('2')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Chapter 2
            </button>
            <button
              onClick={() => handleChapterSelect('3')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Chapter 3
            </button>
          </div>
        )}
      </div>

      {/* Substack Link */}
      <a 
        href="https://learnthroughstories.substack.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="transform transition-all hover:scale-110"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Subscribe to Learn Through Stories newsletter"
      >
        <Image 
          src="/images/substack.jpg" 
          alt="Subscribe to Learn Through Stories" 
          width={80}
          height={80}
          className="rounded-lg shadow-md"
        />
      </a>
    </nav>
  )
} 