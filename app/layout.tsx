import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { AnalyticsWrapper } from './new-quiz/utils/analytics'
import './globals.css'
import ScrollToTop from './components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Are You Smarter Than Mr. Fluffbutt?',
  description: 'A fun math quiz game for kids!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} h-full bg-[#FFFDD0] min-h-screen`}>
        <ScrollToTop />
        <div className="fixed inset-0 w-full h-full -z-10 opacity-20 bg-paper bg-warm" aria-hidden="true" />
        <div className="min-h-full flex flex-col">
          {children}
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
