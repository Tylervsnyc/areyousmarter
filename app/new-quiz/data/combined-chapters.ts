import type { ChapterData } from '../types'
import chapters from './new-chapters'
import chapter9 from './chapters/chapter9'
import chapter10 from './chapters/chapter10'

// Create a combined chapters object
const combinedChapters: Record<string, ChapterData> = {
  ...chapters,
  chapter9,
  chapter10
}

export default combinedChapters

// Helper functions
export const getChapter = (id: string): ChapterData | undefined => combinedChapters[id]
export const getChapterIds = (): string[] => Object.keys(combinedChapters)
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