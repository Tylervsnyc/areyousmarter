import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Are You Smarter Than Mr. Fluffbutt?',
  description: 'Choose a chapter to begin your adventure with Mr. Fluffbutt!'
}

export default function ChaptersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 