'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Multiple approaches to ensure scroll reset
    if (typeof window !== 'undefined') {
      // Reset scroll position
      window.scrollTo(0, 0)
      
      // Force scroll to top
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      // Prevent scroll restoration
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
      }
    }
  }, [pathname]) // Reset scroll when pathname changes

  return null
} 