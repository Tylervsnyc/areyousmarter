import { notFound } from 'next/navigation'
import QuizPageTemplate from '@/components/QuizPageTemplate'
import { getChapter } from '@/app/data/chapters'

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapterNumber = parseInt(params.id)
  
  // Legacy chapters (1-4)
  if (chapterNumber <= 4) {
    const legacyChapters = {
      1: {
        title: "Are You Smarter Than Mr. Fluffbutt?",
        subtitle: "Chapter 1: Help Me Get This Bike!",
        readStoryLink: "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-1",
      },
      2: {
        title: "Are You Smarter Than Mr. Fluffbutt?",
        subtitle: "Chapter 2: A Big Three Dollar Gamble",
        readStoryLink: "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-2",
      },
      3: {
        title: "Are You Smarter Than Mr. Fluffbutt?",
        subtitle: "Chapter 3: Let it Roll! Let it Roll!",
        readStoryLink: "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-3-a",
      },
      4: {
        title: "Are You Smarter Than Mr. Fluffbutt?",
        subtitle: "Chapter 4: The Worst Week EVER!",
        readStoryLink: "https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-4",
      }
    }

    const chapter = legacyChapters[chapterNumber as keyof typeof legacyChapters]
    if (!chapter) return notFound()

    return (
      <QuizPageTemplate
        title={chapter.title}
        subtitle={chapter.subtitle}
        readStoryLink={chapter.readStoryLink}
        beginQuizLink={`/quiz/${chapterNumber}/name`}
        chapterNumber={chapterNumber}
      />
    )
  }

  // New JSON-based chapters (5+)
  const chapter = getChapter(params.id)
  if (!chapter) return notFound()

  return (
    <QuizPageTemplate
      title={chapter.title}
      subtitle={chapter.subtitle}
      readStoryLink={chapter.readStoryLink}
      beginQuizLink={chapter.quizLink}
      chapterNumber={chapterNumber}
    />
  )
} 