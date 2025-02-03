// Analytics utility functions
export const trackUserProgress = (step: string, chapterNumber: string) => {
  // @ts-ignore
  window?.gtag('event', 'quiz_progress', {
    'step': step,
    'chapter': chapterNumber
  });
}

export const trackQuestionAnswer = (questionNumber: string, isCorrect: boolean, chapterNumber: string) => {
  // @ts-ignore
  window?.gtag('event', 'question_answered', {
    'question_number': questionNumber,
    'is_correct': isCorrect,
    'chapter': chapterNumber
  });
}

export const trackCertificate = (score: number, chapterNumber: string) => {
  // @ts-ignore
  window?.gtag('event', 'certificate_earned', {
    'score': score,
    'chapter': chapterNumber
  });
} 