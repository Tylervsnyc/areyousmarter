'use client'

import NameForm from '@/app/components/NameForm'
import { useParams } from 'next/navigation'

export default function NamePage() {
  const params = useParams()
  const id = params?.id as string

  return <NameForm chapterId={id} />
} 