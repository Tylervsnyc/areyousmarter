'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import BackgroundPattern from './components/BackgroundPattern'
import ScrollToTop from './components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
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
      <body className={`${inter.className} h-full`}>
        <ScrollToTop />
        <BackgroundPattern pattern="paper" tone="warm">
          <div className="min-h-full flex flex-col">
            {children}
          </div>
        </BackgroundPattern>
      </body>
    </html>
  )
}
