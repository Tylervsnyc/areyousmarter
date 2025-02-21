'use client'

import { duoFontStyles } from '../styles'

export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <style jsx global>{duoFontStyles}</style>
      {children}
    </div>
  )
} 