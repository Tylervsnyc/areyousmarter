import { Question, Chapter } from '@/types'
import { chapter1Questions } from '@/data/quizzes/chapter1'
import { chapter2Questions } from '@/data/quizzes/chapter2'
import { chapter3Questions } from '@/data/quizzes/chapter3'
import { chapter4Questions } from '@/data/quizzes/chapter4'

// Extend Chapter type with id
export type ChapterData = Chapter & {
  id: string
}

export const chapters: Record<string, ChapterData> = {
  "1": {
    id: "1",
    title: "Are You Smarter Than Mr. Fluffbutt?",
    subtitle: "Chapter 1: Help Me Get This Bike!",
    questions: chapter1Questions as Question[],
    readStoryLink: "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-1",
    theme: {
      pattern: 'paper',
      tone: 'warm'
    }
  },
  "2": {
    id: "2",
    title: "Are You Smarter Than Mr. Fluffbutt?",
    subtitle: "Chapter 2: Saving is Hard!",
    questions: chapter2Questions as Question[],
    readStoryLink: "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-2",
    theme: {
      pattern: 'grid',
      tone: 'cool'
    }
  },
  "3": {
    id: "3",
    title: "Are You Smarter Than Mr. Fluffbutt?",
    subtitle: "Chapter 3: Making Progress!",
    questions: chapter3Questions as Question[],
    readStoryLink: "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-3",
    theme: {
      pattern: 'dots',
      tone: 'light'
    }
  },
  "4": {
    id: "4",
    title: "Are You Smarter Than Mr. Fluffbutt?",
    subtitle: "Chapter 4: The Worst Week EVER!",
    questions: chapter4Questions as Question[],
    readStoryLink: "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-4",
    theme: {
      pattern: 'waves',
      tone: 'cool'
    }
  }
}

export function getChapter(id: string): ChapterData | null {
  return chapters[id] || null
}

export function isValidChapter(id: string): boolean {
  return id in chapters
}

export function getNextChapter(currentId: string): string | null {
  const nextId = (parseInt(currentId) + 1).toString()
  return isValidChapter(nextId) ? nextId : null
}

export function getPreviousChapter(currentId: string): string | null {
  const prevId = (parseInt(currentId) - 1).toString()
  return isValidChapter(prevId) ? prevId : null
} 