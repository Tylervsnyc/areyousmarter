import { Chapter } from '../types/index'
import { chapters as legacyChapters } from '../data/quizzes'

// New chapters (5+) will be populated with actual chapter data from JSON files
const newChapters: Record<string, Chapter> = {}

export function getChapter(id: string): Chapter | null {
  // First check legacy chapters
  if (parseInt(id) <= 4) {
    return legacyChapters[id] || null
  }
  
  // Then check new chapters
  return newChapters[id] || null
}

export function addChapter(id: string, chapter: Chapter) {
  // Only allow adding new chapters (5+)
  if (parseInt(id) <= 4) {
    console.warn(`Cannot add legacy chapter ${id}. Use the existing implementation.`)
    return
  }
  
  newChapters[id] = chapter
} 