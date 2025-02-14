import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getChapter } from '../data/chapters'
import { DuoTemplateButton } from '../components/DuoTemplateButton'
import DuoHeader from '../components/DuoHeader'
import { duoFontStyles, duoDefaultTheme } from '../styles'
import ChapterContent from './ChapterContent'
import { ChapterPage } from '../components/ChapterPage'

interface PageParams {
  params: {
    id: string
  }
}

export default function Page({ params }: PageParams) {
  try {
    const chapter = getChapter(params.id)

    if (!chapter) {
      notFound()
    }

    return <ChapterPage chapter={chapter} />
  } catch (error) {
    console.error('Error loading chapter:', error)
    notFound()
  }
} 