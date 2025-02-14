'use client'

import { Pattern, Tone } from '../types'

interface BackgroundPatternProps {
  pattern?: Pattern
  tone?: Tone
  className?: string
}

const BackgroundPattern = ({ pattern = 'paper', tone = 'warm', className = '' }: BackgroundPatternProps) => {
  const getPatternClass = () => {
    switch (pattern) {
      case 'paper':
        return 'bg-paper'
      case 'grid':
        return 'bg-grid'
      case 'dots':
        return 'bg-dots'
      case 'brush':
        return 'bg-brush'
      case 'waves':
        return 'bg-waves'
      default:
        return 'bg-paper'
    }
  }

  const getToneClass = () => {
    switch (tone) {
      case 'warm':
        return 'bg-warm'
      case 'cool':
        return 'bg-cool'
      case 'light':
        return 'bg-light'
      default:
        return 'bg-warm'
    }
  }

  return (
    <div 
      className={`fixed inset-0 w-full h-full -z-10 opacity-20 ${getPatternClass()} ${getToneClass()} ${className}`}
      aria-hidden="true"
    />
  )
}

export default BackgroundPattern 