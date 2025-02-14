'use client';

import Link from 'next/link';
import { chapters } from '../data/chapters';
import { DuoTemplateButton } from '../components/DuoTemplateButton';
import DuoHeader from '../components/DuoHeader';
import { duoFontStyles, duoDefaultTheme } from '../styles';

const buttonVariants = ['feather', 'macaw', 'lilac', 'bee'] as const;
type ButtonVariant = typeof buttonVariants[number];

export default function AdminDashboard() {
  // Convert chapters object to array and sort by ID
  const chapterList = Object.values(chapters).sort((a, b) => 
    a.id.localeCompare(b.id, undefined, { numeric: true })
  );

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{duoFontStyles}</style>

      {/* Header */}
      <DuoHeader />

      {/* Main Content */}
      <div className="flex-1 relative">
        <div className="absolute inset-0" style={{ backgroundColor: duoDefaultTheme.backgroundColor }}>
          <div className="h-full flex flex-col px-4">
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Title Box */}
              <div 
                className="rounded-xl border-4 p-6 sm:p-8 mb-8"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text mb-2">
                  Admin Dashboard
                </h1>
                <h2 className="text-xl sm:text-2xl text-gray-600 text-center title-text">
                  Quick Access to All Chapters
                </h2>
              </div>

              {/* Chapter Links */}
              <div className="w-full max-w-md mx-auto space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {chapterList.map((chapter, index) => (
                    <Link key={chapter.id} href={`/new-quiz/${chapter.id}`}>
                      <DuoTemplateButton 
                        variant={buttonVariants[index % buttonVariants.length]}
                      >
                        {chapter.title}
                        <span className="text-sm block mt-1 opacity-75">
                          {chapter.subtitle}
                        </span>
                      </DuoTemplateButton>
                    </Link>
                  ))}
                </div>

                {/* Additional Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                    Additional Pages
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <Link href="/new-quiz/button-reference">
                      <DuoTemplateButton variant="feather">
                        Button Reference
                      </DuoTemplateButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 