'use client'

import { useEffect, useState } from 'react'

export function useButtonSound() {
  const [sound, setSound] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio('/sounds/buttonpress.mp3')
    audio.volume = 0.5 // Set volume to 50%
    setSound(audio)
  }, [])

  const playSound = () => {
    if (sound) {
      sound.currentTime = 0
      sound.play().catch(error => console.log('Error playing sound:', error))
    }
  }

  return playSound
} 