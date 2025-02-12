'use client'

import NameInputTemplate from '@/components/NameInputTemplate'

export default function NamePage({ params }: { params: { id: string } }) {
  return (
    <NameInputTemplate
      id={params.id}
    />
  )
} 