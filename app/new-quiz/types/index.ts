// Theme-related types
export type Pattern = 'dots' | 'paws' | 'stars' | 'hearts';
export type Tone = 'light' | 'dark' | 'blue' | 'green' | 'red';

export interface Theme {
  pattern: Pattern;
  tone: Tone;
}

// Question-related types
export interface Question {
  id: string;
  type: 'multiple-choice';
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface QuestionsByAge {
  age4to5: Question[];
  age6to7: Question[];
  age8to9: Question[];
}

// Chapter-related types
export interface ChapterData {
  id: string;
  title: string;
  subtitle: string;
  questions: QuestionsByAge;
  readStoryLink: string;
  theme: Theme;
}