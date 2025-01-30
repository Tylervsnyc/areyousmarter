'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import chapter3Data from '@/app/data/chapter3.json';

export default function Chapter3Landing() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {chapter3Data.screens.intro.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          {chapter3Data.screens.intro.subtitle}
        </p>
        <div className="relative w-full aspect-video max-w-2xl mx-auto mb-8">
          <Image
            src={chapter3Data.screens.intro.host_image}
            alt="Chapter 3 Host"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          {chapter3Data.screens.intro.description}
        </p>
        <button
          onClick={() => router.push('/quiz/3/name')}
          className="bg-white text-purple-600 hover:bg-purple-100 px-8 py-4 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-200 hover:scale-105"
        >
          {chapter3Data.screens.intro.button_text}
        </button>
      </div>
    </div>
  );
} 