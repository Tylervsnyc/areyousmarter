import { duoFontStyles } from '../styles'

export const metadata = {
  title: 'Quiz Test Page',
  description: 'Test page for viewing quiz questions',
}

export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <style jsx global>{duoFontStyles}</style>
        {children}
      </body>
    </html>
  )
} 