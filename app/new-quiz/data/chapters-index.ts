import type { ChapterData } from '../types'

// Import chapter 9 from its separate file
import chapter9 from './chapters/chapter9'

// Import existing chapters from new-chapters.ts
import chapters from './new-chapters'

// Create a new chapters object that includes chapter9
const allChapters: Record<string, ChapterData> = {
  ...chapters,
  chapter9
}

export default allChapters

// Helper functions
export const getChapter = (id: string): ChapterData | undefined => allChapters[id]
export const getChapterIds = (): string[] => Object.keys(allChapters)
export const getNextChapterId = (currentChapterId: string): string | null => {
  const chapterIds = getChapterIds()
  const currentIndex = chapterIds.indexOf(currentChapterId)
  if (currentIndex === -1 || currentIndex === chapterIds.length - 1) {
    return null
  }
  return chapterIds[currentIndex + 1]
}
export const getPreviousChapterId = (currentChapterId: string): string | undefined => {
  const chapterIds = getChapterIds()
  const currentIndex = chapterIds.indexOf(currentChapterId)
  return currentIndex > 0 ? chapterIds[currentIndex - 1] : undefined
} 