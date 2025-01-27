export const backgrounds = [
  '/images/backgrounds/bg1.jpg',
  '/images/backgrounds/bg2.jpg',
  '/images/backgrounds/bg3.jpg',
  '/images/backgrounds/bg4.jpg'
]

export function getBackgroundForPath(path: string): string {
  // Use the path to deterministically select a background
  const pathHash = path.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const index = pathHash % backgrounds.length
  return backgrounds[index]
} 