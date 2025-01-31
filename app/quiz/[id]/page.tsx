'use client'

import { useParams } from 'next/navigation'
import QuizPageTemplate from '@/components/QuizPageTemplate'
import { getChapter } from '@/app/data/chapters'

export default function ChapterPage() {
  const params = useParams()
  const chapter = getChapter(params.id as string)

  if (!chapter) {
    return <div>Chapter not found</div>
  }

  return (
    <QuizPageTemplate
      title={chapter.title}
      subtitle={chapter.subtitle}
      readStoryLink={chapter.readStoryLink}
      beginQuizLink={chapter.quizLink}
    />
  )
} 