'use client'

export const playCorrectSound = () => {
  const audio = new Audio('/sounds/correct.wav')
  audio.volume = 0.4 // Reduce volume to 40%
  audio.play().catch(error => {
    console.log('Audio playback failed:', error)
  })
}

export const playIncorrectSound = () => {
  const audio = new Audio('/sounds/incorrect.wav')
  audio.volume = 0.4 // Reduce volume to 40%
  audio.play().catch(error => {
    console.log('Audio playback failed:', error)
  })
} 