import { NavigationState } from '../types'

export const handleQuestionNavigation = (
  state: NavigationState,
  isCorrect: boolean,
  router: any
) => {
  const newScore = state.score + (isCorrect ? 1 : 0)
  
  // If this was the last question, go to results
  if (state.currentQuestion === state.totalQuestions) {
    router.push(`/test/duo-template/results?name=${encodeURIComponent(state.name)}&score=${newScore}`)
    return
  }

  // Otherwise, go to next question
  router.push(`/test/duo-template/question/${state.currentQuestion + 1}?name=${encodeURIComponent(state.name)}&score=${newScore}`)
}

export const getCurrentQuestionData = (searchParams: URLSearchParams) => {
  return {
    currentQuestion: parseInt(searchParams.get('currentQuestion') || '1'),
    score: parseInt(searchParams.get('score') || '0'),
    name: searchParams.get('name') || ''
  }
} 