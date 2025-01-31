import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BackgroundPattern from './components/BackgroundPattern'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Are You Smarter Than Mr. Fluffbutt?',
  description: 'A fun and educational game show hosted by Mr. Fluffbutt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundPattern pattern="paper" tone="warm">
          {children}
        </BackgroundPattern>
        <GoogleAnalytics gaId="G-0B43NL2HR2" />
      </body>
    </html>
  )
}
