'use client'

import { useEffect, useState } from 'react'

interface MagicProgressBarProps {
  currentQuestion: number
  totalQuestions: number
}

// Predefined bubble positions and sizes for consistent rendering
const bubbleConfigs = [
  { left: 20, width: 5, height: 5, delay: 0.2, duration: 2.0 },
  { left: 35, width: 6, height: 6, delay: 0.4, duration: 2.2 },
  { left: 50, width: 7, height: 7, delay: 0.6, duration: 2.4 },
  { left: 65, width: 5, height: 5, delay: 0.8, duration: 2.6 },
  { left: 80, width: 6, height: 6, delay: 1.0, duration: 2.8 },
  { left: 25, width: 7, height: 7, delay: 1.2, duration: 2.0 },
  { left: 40, width: 5, height: 5, delay: 1.4, duration: 2.2 },
  { left: 55, width: 6, height: 6, delay: 1.6, duration: 2.4 },
  { left: 70, width: 7, height: 7, delay: 1.8, duration: 2.6 },
  { left: 85, width: 5, height: 5, delay: 2.0, duration: 2.8 },
  { left: 30, width: 6, height: 6, delay: 2.2, duration: 2.0 },
  { left: 45, width: 7, height: 7, delay: 2.4, duration: 2.2 },
  { left: 60, width: 5, height: 5, delay: 2.6, duration: 2.4 },
  { left: 75, width: 6, height: 6, delay: 2.8, duration: 2.6 },
  { left: 90, width: 7, height: 7, delay: 3.0, duration: 2.8 }
]

export default function MagicProgressBar({ currentQuestion, totalQuestions }: MagicProgressBarProps) {
  const progress = (currentQuestion / totalQuestions) * 100

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden relative">
        <div className="relative h-full w-full">
          {/* Bubbles */}
          {bubbleConfigs.map((config, index) => (
            <div
              key={index}
              style={{
                left: `${config.left}%`,
                width: `${config.width}px`,
                height: `${config.height}px`,
                animationDelay: `${config.delay}s`,
                animationDuration: `${config.duration}s`
              }}
              className="absolute rounded-full bg-white/60 animate-bubble"
            />
          ))}
          
          {/* Progress Fill */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            style={{
              width: `${progress}%`,
              transition: 'width 0.5s ease-out'
            }}
          >
            {/* Final Question Glow Effect */}
            {currentQuestion === totalQuestions && (
              <div className="absolute inset-0 animate-pulse bg-yellow-400/30" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 