'use client'

export const playCorrectSound = () => {
  const audio = new Audio('/sounds/correct.wav')
  audio.play().catch(error => {
    console.log('Audio playback failed:', error)
  })
}

export const playIncorrectSound = () => {
  const audio = new Audio('/sounds/incorrect.wav')
  audio.play().catch(error => {
    console.log('Audio playback failed:', error)
  })
} 