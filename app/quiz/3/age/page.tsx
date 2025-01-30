'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import chapter3Data from '@/app/data/chapter3.json';

const AgeSelectionContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleAgeSelect = (age: string) => {
    if (age === '6-7' || age === '8-9') {
      router.push(`/quiz/3/${age}?name=${encodeURIComponent(name)}&version=${age === '6-7' ? 'easy' : 'hard'}`);
      return;
    }
    
    setMessage(chapter3Data.screens.age_selection.age_responses[age as keyof typeof chapter3Data.screens.age_selection.age_responses]);
    setError('Please select a valid age group');
  };

  const ageGroups = {
    '6-7': chapter3Data.screens.age_selection.age_groups.younger,
    '8-9': chapter3Data.screens.age_selection.age_groups.older,
    'baby': chapter3Data.screens.age_selection.age_groups.goof_options.baby,
    'ship': chapter3Data.screens.age_selection.age_groups.goof_options.ship
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          {chapter3Data.screens.age_selection.title}
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          {chapter3Data.screens.age_selection.greeting.replace('{name}', name)}
        </p>
        
        {message && (
          <p className="text-purple-600 mb-6 text-center font-medium animate-bounce">
            {message}
          </p>
        )}
        
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(ageGroups).map(([age, text]) => (
            <button
              key={age}
              onClick={() => handleAgeSelect(age)}
              className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold py-4 px-6 rounded-lg transition duration-200 text-lg transform hover:scale-105"
            >
              {text}
            </button>
          ))}
        </div>
        
        {error && (
          <p className="text-red-500 mt-4 text-center text-sm">{error}</p>
        )}
      </div>
    </div>
  );
};

export default function AgePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AgeSelectionContent />
    </Suspense>
  );
} 