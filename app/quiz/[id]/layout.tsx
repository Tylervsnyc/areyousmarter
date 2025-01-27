import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  params: { id: string }
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }]
}

export default function QuizLayout({ children, params }: LayoutProps) {
  return <>{children}</>
} 