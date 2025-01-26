'use client'

import Image from 'next/image'

export default function Navigation() {
  return (
    <div className="fixed top-0 w-full z-50 flex justify-between items-center p-6">
      {/* Logo/Home Link */}
      <a 
        href="https://www.learnthroughstories.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all hover:scale-105"
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
      >
        <Image 
          src="/images/substack.jpg" 
          alt="Subscribe to Learn Through Stories" 
          width={80}
          height={80}
          className="rounded-lg shadow-md"
        />
      </a>
    </div>
  )
} 