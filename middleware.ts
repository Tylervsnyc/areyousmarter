import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Old URL patterns we want to redirect
const redirects = [
  // Chapter landing pages
  { from: '/quiz/1', to: '/new-quiz/chapter1' },
  { from: '/quiz/2', to: '/new-quiz/chapter2' },
  { from: '/quiz/3', to: '/new-quiz/chapter3' },
  { from: '/quiz/4', to: '/new-quiz/chapter4' },
  
  // Age-specific quiz pages
  { from: '/quiz/1/4-5', to: '/new-quiz/chapter1/quiz?age=4-5' },
  { from: '/quiz/1/6-7', to: '/new-quiz/chapter1/quiz?age=6-7' },
  { from: '/quiz/1/8-9', to: '/new-quiz/chapter1/quiz?age=8-9' },
  
  { from: '/quiz/2/4-5', to: '/new-quiz/chapter2/quiz?age=4-5' },
  { from: '/quiz/2/6-7', to: '/new-quiz/chapter2/quiz?age=6-7' },
  { from: '/quiz/2/8-9', to: '/new-quiz/chapter2/quiz?age=8-9' },
  
  { from: '/quiz/3/4-5', to: '/new-quiz/chapter3/quiz?age=4-5' },
  { from: '/quiz/3/6-7', to: '/new-quiz/chapter3/quiz?age=6-7' },
  { from: '/quiz/3/8-9', to: '/new-quiz/chapter3/quiz?age=8-9' },
  
  { from: '/quiz/4/4-5', to: '/new-quiz/chapter4/quiz?age=4-5' },
  { from: '/quiz/4/6-7', to: '/new-quiz/chapter4/quiz?age=6-7' },
  { from: '/quiz/4/8-9', to: '/new-quiz/chapter4/quiz?age=8-9' },
]

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const path = request.nextUrl.pathname

  // Check if the current path matches any of our redirect patterns
  const redirect = redirects.find(r => r.from === path)

  // If we found a match, redirect to the new URL
  if (redirect) {
    // Create the new URL with the same host
    const url = new URL(redirect.to, request.url)
    return NextResponse.redirect(url)
  }

  // If no redirect is found, continue with the request
  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Match all paths that start with /quiz/
    '/quiz/:path*',
  ],
} 