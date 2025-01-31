'use client'

import { useParams } from 'next/navigation'
import AgeInputTemplate from '@/components/AgeInputTemplate'

export default function AgePage() {
  const params = useParams()
  return <AgeInputTemplate chapterNumber={params.id as string} />
}