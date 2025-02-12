'use client'

import { useSearchParams } from 'next/navigation'
import QuizTemplate from '@/components/QuizTemplate'
import { notFound } from 'next/navigation'
import { getChapter } from '@/lib/chapters'

export default function QuizPage({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams()
  const age = searchParams.get('age')
  const name = searchParams.get('name')

  if (!age || !name) {
    notFound()
  }

  // For legacy chapters (1-4), we use the age range directly
  if (parseInt(params.id) <= 4) {
    return (
      <QuizTemplate
        id={params.id}
        ageRange={age}
        name={name}
      />
    )
  }

  // For new chapters (5+), we get the chapter data from JSON
  const chapter = getChapter(params.id)
  if (!chapter) {
    notFound()
  }

  return (
    <QuizTemplate
      id={params.id}
      ageRange={age}
      name={name}
      chapter={chapter}
    />
  )
} 