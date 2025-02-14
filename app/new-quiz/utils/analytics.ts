import { Analytics } from '@vercel/analytics/react'

// Event names for consistent tracking
export const ANALYTICS_EVENTS = {
  CHAPTER_VIEW: 'chapter_view',
  NAME_ENTRY: 'name_entry',
  AGE_SELECT: 'age_select',
  QUIZ_START: 'quiz_start',
  QUESTION_ANSWER: 'question_answer',
  QUIZ_COMPLETE: 'quiz_complete',
  NEXT_CHAPTER: 'next_chapter',
  TRY_AGAIN: 'try_again'
} as const

// Analytics wrapper component
export const AnalyticsWrapper = Analytics

// Helper function to track events
export function trackEvent(
  eventName: string,
  properties: {
    chapterId: string
    [key: string]: any
  }
) {
  // Check if window and gtag are available (client-side only)
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore - gtag might not be recognized by TypeScript
    window.gtag('event', eventName, {
      ...properties,
      // Add common properties
      timestamp: new Date().toISOString(),
      path: window.location.pathname
    })
  }
} 