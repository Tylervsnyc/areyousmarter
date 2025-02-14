import type { Question, QuestionsByAge } from '../../types'

/**
 * Template for creating chapter questions
 * Replace X with chapter number (1-10)
 * 
 * ID Format:
 * - Ages 4-5: cX.1.Y (where Y is 1-10)
 * - Ages 6-7: cX.2.Y (where Y is 1-10)
 * - Ages 8-9: cX.3.Y (where Y is 1-10)
 */

// Age 4-5 Quiz Template (Simple arithmetic, visual elements, straightforward language)
export const age4to5: Question[] = [
  {
    id: 'cX.1.1',
    type: 'multiple-choice',
    question: '', // Add emoji prefix and suffix, use simple arithmetic under 20
    options: ['', '', '', ''],
    answer: '',
    explanation: '' // Add emoji prefix and suffix
  }
];

// Age 6-7 Quiz Template (Intermediate arithmetic, word problems, clear context)
export const age6to7: Question[] = [
  {
    id: 'cX.2.1',
    type: 'multiple-choice',
    question: '', // Add emoji prefix and suffix, use arithmetic under 100
    options: ['', '', '', ''],
    answer: '',
    explanation: '' // Add emoji prefix and suffix
  }
];

// Age 8-9 Quiz Template (Advanced arithmetic, multi-step problems, business concepts)
export const age8to9: Question[] = [
  {
    id: 'cX.3.1',
    type: 'multiple-choice',
    question: '', // Add emoji prefix and suffix, use complex calculations
    options: ['', '', '', ''],
    answer: '',
    explanation: '' // Add emoji prefix and suffix
  }
];

// Export structure that all chapters must follow
export const questions: QuestionsByAge = {
  age4to5,
  age6to7,
  age8to9
}; 