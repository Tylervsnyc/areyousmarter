import { notFound } from 'next/navigation'
import { getChapter } from '../../data/combined-chapters'
import { ResultsPage } from '../../components/ResultsPage'

interface PageParams {
  params: {
    id: string
  }
  searchParams: {
    score?: string
    name?: string
    age?: string
  }
}

export default function Page({ params, searchParams }: PageParams) {
  try {
    const chapter = getChapter(params.id)

    if (!chapter) {
      notFound()
    }

    const { score, name, age } = searchParams

    if (!score || !name || !age) {
      notFound()
    }

    const scoreNum = parseInt(score, 10)

    if (isNaN(scoreNum)) {
      notFound()
    }

    return <ResultsPage chapter={chapter} score={scoreNum} name={name} age={age} />
  } catch (error) {
    console.error('Error loading results:', error)
    notFound()
  }
} 