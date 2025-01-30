'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import chapter3Data from '@/app/data/chapter3.json';

const ResultsContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = parseInt(searchParams.get('score') || '0');
  const total = parseInt(searchParams.get('total') || '0');
  const name = searchParams.get('name') || '';
  const percentage = (score / total) * 100;

  const getMessage = () => {
    if (percentage === 100) return chapter3Data.screens.results.messages.perfect;
    if (percentage >= 70) return chapter3Data.screens.results.messages.great;
    if (percentage >= 40) return chapter3Data.screens.results.messages.good;
    return chapter3Data.screens.results.messages.needsPractice;
  };

  const handleTryAgain = () => {
    router.push(`/quiz/3/age?name=${encodeURIComponent(name)}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {chapter3Data.screens.results.title}
        </h1>
        <p className="text-xl text-gray-700">
          {name}, you scored {score} out of {total}!
        </p>
        <p className="text-lg text-gray-600">
          {getMessage()}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleTryAgain}
            className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            {chapter3Data.screens.results.buttons.tryAgain}
          </button>
          <button
            onClick={() => router.push('/')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            {chapter3Data.screens.results.buttons.home}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  );
} 