import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/app/components/Navigation'
import { getBackgroundForPath } from '@/app/utils/backgrounds'
import NameForm from '@/app/components/NameForm'

interface ChapterData {
  style: string;
}

const chapters: Record<string, ChapterData> = {
  '1': {
    style: 'friendly'
  },
  '2': {
    style: 'imperial'
  }
}

export const metadata: Metadata = {
  title: 'Enter Your Name',
  description: 'Tell us your name to begin the quiz!'
}

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

/**
 * Name selection page component for the quiz
 * @param {{ params: { id: string } }} props - Next.js dynamic route params
 */
export default function NamePage({ params }: PageProps) {
  const chapterId = params.id;
  const backgroundImage = getBackgroundForPath(`/quiz/${chapterId}/name`);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Page Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      <div className="relative max-w-4xl mx-auto pt-24 sm:pt-48 p-4 sm:p-8">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <NameForm chapterId={chapterId} />
        </div>
      </div>
    </main>
  );
} 