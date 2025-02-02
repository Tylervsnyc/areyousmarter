import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import BackgroundPattern from './components/BackgroundPattern'

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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0B43NL2HR2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0B43NL2HR2');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <BackgroundPattern pattern="paper" tone="warm">
          {children}
        </BackgroundPattern>
      </body>
    </html>
  )
}
