import { chapter1Questions } from './chapter1'
import { chapter2Questions } from './chapter2'
import { chapter3Questions } from './chapter3'
import { Chapter } from '@/types'

export const chapters: Record<string, Chapter> = {
  "1": {
    title: "Are You Smarter Than Mr. Fluffbutt?",
    subtitle: "Chapter 1: Help Me Get This Bike!",
    questions: chapter1Questions
  },
  "2": {
    title: "Are You Smarter Than Mr. Fluffbutt?",
    subtitle: "Chapter 2: Saving is Hard!",
    questions: chapter2Questions
  },
  "3": {
    title: "Are You Smarter Than Mr. Fluffbutt?",
    subtitle: "Chapter 3: Making Progress!",
    questions: chapter3Questions
  }
}

export function getChapter(id: string): Chapter | null {
  return chapters[id] || null
} 