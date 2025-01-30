'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import chapter3Data from '@/app/data/chapter3.json';

export default function QuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';
  const version = searchParams.get('version') || 'easy';
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [message, setMessage] = useState('');

  const questions = version === 'easy' 
    ? chapter3Data.screens.quiz.younger.questions 
    : chapter3Data.screens.quiz.older.questions;

  const question = questions[currentQuestion];

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    const isCorrect = answer === question.correct_answer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setMessage(question.host_reactions.correct);
    } else {
      setMessage(question.host_reactions.incorrect);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setMessage('');
      } else {
        router.push(`/quiz/3/results?score=${score + (isCorrect ? 1 : 0)}&total=${questions.length}&name=${encodeURIComponent(name)}`);
      }
    }, 1500);
  };

  const getAnswerButtonClass = (answer: string) => {
    if (!isAnswered) return 'bg-white hover:bg-gray-50';
    if (answer === question.correct_answer) return 'bg-green-500 text-white';
    if (answer === selectedAnswer) return 'bg-red-500 text-white';
    return 'bg-white opacity-50';
  };

  if (!question) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
          <p className="text-gray-600 text-center">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            {question.question}
          </h2>
          {message && (
            <p className="text-lg text-purple-600 text-center animate-bounce">
              {message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {question.options.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(answer)}
              disabled={isAnswered}
              className={`${getAnswerButtonClass(answer)} p-4 rounded-lg shadow transition-all duration-200 text-lg font-medium text-gray-900 disabled:cursor-not-allowed transform hover:scale-105`}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 