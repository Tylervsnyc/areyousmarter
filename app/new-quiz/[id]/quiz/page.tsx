import { notFound } from 'next/navigation'
import { getChapter } from '../../data/new-chapters'
import { QuizPage } from '../../components/QuizPage'

interface PageParams {
  params: {
    id: string
  }
  searchParams: {
    age?: string
    name?: string
  }
}

export default function Page({ params, searchParams }: PageParams) {
  try {
    const chapter = getChapter(params.id)

    if (!chapter) {
      notFound()
    }

    const { age, name } = searchParams

    if (!age || !name) {
      notFound()
    }

    return <QuizPage chapter={chapter} age={age} name={name} />
  } catch (error) {
    console.error('Error loading quiz:', error)
    notFound()
  }
} 