'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface ChapterTemplateProps {
  /**
   * The main title of the chapter (e.g., "Are You Smarter Than Mr. Fluffbutt?")
   */
  title: string

  /**
   * The subtitle/chapter name (e.g., "Chapter 1: Help Me Get This Bike!")
   */
  subtitle: string

  /**
   * The URL to the story on Substack
   */
  readStoryLink: string

  /**
   * The internal route to begin the quiz (e.g., "/quiz/1/name")
   */
  beginQuizLink: string

  /**
   * The chapter ID (used for routing and analytics)
   */
  id: string

  /**
   * @deprecated Use id instead
   * The chapter number (used for analytics and routing)
   */
  chapterNumber?: number
}

/**
 * ChapterTemplate - A reusable component for chapter landing pages
 * 
 * Flow:
 * 1. User lands on chapter page (e.g., /quiz/1)
 * 2. They can either:
 *    a. Click "Read the Story" -> Goes to Substack
 *    b. Click "Begin Quiz" -> Goes to name input (/quiz/[id]/name)
 * 3. Name input -> Age selection -> Quiz
 * 
 * Usage:
 * ```tsx
 * export default function Chapter1Page() {
 *   return (
 *     <ChapterTemplate
 *       title="Are You Smarter Than Mr. Fluffbutt?"
 *       subtitle="Chapter 1: Help Me Get This Bike!"
 *       readStoryLink="https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-1"
 *       beginQuizLink="/quiz/1/name"
 *       id="1"
 *     />
 *   )
 * }
 * ```
 */
export default function ChapterTemplate({
  title,
  subtitle,
  readStoryLink,
  beginQuizLink,
  id,
  chapterNumber
}: ChapterTemplateProps) {
  // Support both id and chapterNumber for backwards compatibility
  const chapterId = id || chapterNumber?.toString()

  if (!chapterId) {
    console.warn('ChapterTemplate: Either id or chapterNumber must be provided')
    return null
  }

  // Prevent scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{`
        .button-3d {
          position: relative;
          z-index: 0;
          transform: translateZ(0);
          transition: filter 0.2s;
          font-family: din-round, sans-serif;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .title-text {
          font-family: din-round, sans-serif;
          letter-spacing: 0.5px;
        }

        .button-3d:after {
          content: "";
          background-clip: padding-box;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          top: 0;
          z-index: -1;
          border-radius: 16px;
          border-width: 0 0 4px;
          border-style: solid;
          border-color: transparent;
        }

        .button-3d:active {
          border-width: 4px 0 0;
          background: none;
        }

        .button-3d:hover:not(:disabled) {
          filter: brightness(1.1);
        }

        .blue-3d:after {
          background-color: rgb(37, 99, 235);
        }

        .green-3d:after {
          background-color: rgb(34, 197, 94);
        }
      `}</style>

      {/* Header - 15vh */}
      <div className="relative h-[15vh] w-full flex-shrink-0">
        <Image
          src="/images/header.jpg"
          alt="Header Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Logo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Link href="https://www.learnthroughstories.com/">
            <Image
              src="/images/logo.png"
              alt="Learn Through Stories"
              width={100}
              height={25}
              priority
            />
          </Link>
        </div>
        {/* Substack */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <Link href="https://learnthroughstories.substack.com/">
            <Image
              src="/images/substack.jpg"
              alt="Subscribe to Learn Through Stories"
              width={80}
              height={20}
              priority
            />
          </Link>
        </div>
      </div>

      {/* Main Content - 85vh */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: '#FFFDD0' }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Title Box */}
              <div className="bg-white/90 rounded-xl border-4 border-yellow-400 p-6 sm:p-8 mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text">
                  {title}
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center mt-4 title-text">
                  {subtitle}
                </h2>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-md mx-auto px-4">
                <Link href={readStoryLink} className="block">
                  <button className="button-3d blue-3d w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl border-transparent border-b-4 text-lg hover:brightness-110 transition-all">
                    Read the Story
                  </button>
                </Link>
                <Link href={beginQuizLink} className="block">
                  <button className="button-3d green-3d w-full bg-green-500 text-white font-bold py-4 px-6 rounded-2xl border-transparent border-b-4 text-lg hover:brightness-110 transition-all">
                    Begin Quiz
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 