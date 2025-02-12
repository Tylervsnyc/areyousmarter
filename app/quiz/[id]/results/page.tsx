'use client'

import { useSearchParams } from 'next/navigation'
import ResultsTemplate from '@/components/ResultsTemplate'
import { notFound } from 'next/navigation'
import { getChapter } from '@/lib/chapters'

export default function ResultsPage({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams()
  const score = searchParams.get('score')
  const name = searchParams.get('name')
  const age = searchParams.get('age')

  if (!score || !name || !age) {
    notFound()
  }

  // For legacy chapters (1-4), we use the score directly
  if (parseInt(params.id) <= 4) {
    return (
      <ResultsTemplate
        id={params.id}
        score={parseInt(score)}
        name={name}
        ageRange={age}
      />
    )
  }

  // For new chapters (5+), we get the chapter data from JSON
  const chapter = getChapter(params.id)
  if (!chapter) {
    notFound()
  }

  return (
    <ResultsTemplate
      id={params.id}
      score={parseInt(score)}
      name={name}
      ageRange={age}
      chapter={chapter}
    />
  )
} 