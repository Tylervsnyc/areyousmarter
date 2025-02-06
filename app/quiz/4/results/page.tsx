'use client'

import ResultsTemplate from '@/components/ResultsTemplate'
import { Suspense } from 'react'

export default function Results() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsTemplate chapterNumber="4" />
    </Suspense>
  )
} 