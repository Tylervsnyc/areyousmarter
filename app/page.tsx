'use client'

import Image from 'next/image'

export default function Home() {
  const chapters = [
    {
      id: 1,
      title: "The Bike Shop",
      available: true,
    },
    {
      id: 2,
      title: "The Park",
      available: true,
    },
    ...Array(8).fill(null).map((_, index) => ({
      id: index + 3,
      title: `Chapter ${index + 3}`,
      available: false,
    }))
  ];

  return (
    <main className="max-w-4xl mx-auto p-8">
      {/* Main Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Are You Smarter Than Mr. Fluffbutt?
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl mb-12 text-center text-gray-600">
        A Game Show Based on &quot;Help Me Get This Bike!&quot;
      </h2>

      {/* Chapter Selection */}
      <div className="mt-8">
        <h3 className="text-xl mb-4 text-center">Select a Chapter:</h3>
        <div className="grid gap-4">
          {chapters.map((chapter) => (
            <div 
              key={chapter.id}
              className={`p-4 border rounded-lg ${
                chapter.available 
                  ? 'bg-white hover:bg-gray-50 cursor-pointer' 
                  : 'bg-gray-100 cursor-not-allowed'
              }`}
            >
              <a 
                href={chapter.available ? `/chapters/${chapter.id}` : '#'}
                className={`block ${!chapter.available && 'pointer-events-none'}`}
              >
                <span className="font-medium">
                  Chapter {chapter.id}: {chapter.title}
                </span>
                {!chapter.available && (
                  <span className="ml-2 text-sm text-gray-500">Coming Soon</span>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Substack Link */}
      <a 
        href="https://learnthroughstories.substack.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed top-4 right-4"
      >
        <Image 
          src="/images/substack.jpg" 
          alt="Subscribe to Learn Through Stories" 
          width={48}
          height={48}
          className="rounded-lg shadow-md"
        />
      </a>
    </main>
  );
}
