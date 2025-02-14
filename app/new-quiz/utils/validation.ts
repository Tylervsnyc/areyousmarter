import type { ChapterData, Question, QuestionsByAge, Theme } from '../types';

interface ValidationError {
  chapter: string;
  error: string;
}

type AgeGroup = keyof QuestionsByAge;

const validateTheme = (theme: Theme): string[] => {
  const errors: string[] = [];
  if (!theme.pattern || !['dots', 'paws', 'stars', 'hearts'].includes(theme.pattern)) {
    errors.push('Invalid theme pattern');
  }
  if (!theme.tone || !['light', 'dark', 'blue', 'green', 'red'].includes(theme.tone)) {
    errors.push('Invalid theme tone');
  }
  return errors;
};

const validateQuestion = (question: Question, chapterId: string, ageGroup: AgeGroup, index: number): string[] => {
  const errors: string[] = [];

  // Check required fields exist
  if (!question.id) errors.push('Missing question ID');
  if (!question.type) errors.push('Missing question type');
  if (!question.question) errors.push('Missing question text');
  if (!question.options) errors.push('Missing question options');
  if (!question.answer) errors.push('Missing question answer');
  if (!question.explanation) errors.push('Missing question explanation');

  // Validate ID format
  const expectedId = `c${chapterId.replace('chapter', '')}.${
    ageGroup === 'age4to5' ? '1' : 
    ageGroup === 'age6to7' ? '2' : '3'
  }.${index + 1}`;
  
  if (question.id !== expectedId) {
    errors.push(`Incorrect ID format. Expected: ${expectedId}, Got: ${question.id}`);
  }

  // Validate options
  if (!Array.isArray(question.options)) {
    errors.push('Options must be an array');
  } else {
    if (question.options.length < 2) {
      errors.push('Options must have at least 2 choices');
    }
    if (question.options.some(opt => typeof opt !== 'string' || !opt)) {
      errors.push('All options must be non-empty strings');
    }
  }

  // Validate answer is in options
  if (!question.options.includes(question.answer)) {
    errors.push('Answer must be one of the options');
  }

  return errors;
};

export const validateChapterStructure = (chapters: Record<string, ChapterData>): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!chapters || typeof chapters !== 'object') {
    errors.push({
      chapter: 'global',
      error: 'Chapters data structure is invalid'
    });
    return errors;
  }

  Object.entries(chapters).forEach(([chapterId, chapter]) => {
    // Validate basic chapter structure
    if (!chapter) {
      errors.push({
        chapter: chapterId,
        error: 'Chapter is undefined'
      });
      return;
    }

    // Validate required chapter fields
    if (!chapter.id || typeof chapter.id !== 'string') {
      errors.push({
        chapter: chapterId,
        error: 'Missing or invalid chapter ID'
      });
    }

    if (!chapter.title || typeof chapter.title !== 'string') {
      errors.push({
        chapter: chapterId,
        error: 'Missing or invalid chapter title'
      });
    }

    if (!chapter.subtitle || typeof chapter.subtitle !== 'string') {
      errors.push({
        chapter: chapterId,
        error: 'Missing or invalid chapter subtitle'
      });
    }

    // Validate theme
    const themeErrors = validateTheme(chapter.theme);
    themeErrors.forEach(error => {
      errors.push({
        chapter: chapterId,
        error: `Theme error: ${error}`
      });
    });

    // Validate story link
    if (!chapter.readStoryLink || !chapter.readStoryLink.startsWith('/stories/')) {
      errors.push({
        chapter: chapterId,
        error: 'Invalid story link format'
      });
    }

    // Validate questions structure
    if (!chapter.questions) {
      errors.push({
        chapter: chapterId,
        error: 'Missing questions object'
      });
      return;
    }

    // Validate age groups
    const ageGroups: AgeGroup[] = ['age4to5', 'age6to7', 'age8to9'];
    
    ageGroups.forEach((ageGroup: AgeGroup) => {
      const questions = chapter.questions[ageGroup];
      
      // Check if questions exist
      if (!Array.isArray(questions)) {
        errors.push({
          chapter: chapterId,
          error: `${ageGroup} questions must be an array`
        });
        return;
      }

      // Check question count
      if (questions.length !== 10) {
        errors.push({
          chapter: chapterId,
          error: `${ageGroup} has ${questions.length} questions instead of 10`
        });
      }

      // Validate each question
      questions.forEach((question: Question, index: number) => {
        const questionErrors = validateQuestion(question, chapterId, ageGroup, index);
        questionErrors.forEach(error => {
          errors.push({
            chapter: chapterId,
            error: `${ageGroup} Question ${index + 1}: ${error}`
          });
        });
      });
    });
  });

  return errors;
};

export const validateQuizStructure = validateChapterStructure; 