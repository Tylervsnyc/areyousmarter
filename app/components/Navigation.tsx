'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      const link = e.currentTarget as HTMLAnchorElement
      link.click()
    }
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