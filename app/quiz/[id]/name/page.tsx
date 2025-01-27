'use client'

import NameForm from '@/app/components/NameForm'

interface PageProps {
  params: { id: string }
}

export default function NamePage({ params }: PageProps) {
  return <NameForm chapterId={params.id} />
} 