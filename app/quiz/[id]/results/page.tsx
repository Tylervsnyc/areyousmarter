'use client'

import { useParams } from 'next/navigation'
import ResultsTemplate from '@/components/ResultsTemplate'

export default function ResultsPage() {
  const params = useParams()
  return <ResultsTemplate chapterNumber={params.id as string} />
} 