'use client'

import Image from 'next/image'
import { DuoTemplateButton } from './DuoTemplateButton'
import { useEffect, useState } from 'react'

interface FeedbackPopupProps {
  show: boolean
  isCorrect: boolean
  message: string
  explanation?: string
  onTryAgain?: () => void
  onContinue: () => void
}

export const FeedbackPopup = ({
  show,
  isCorrect,
  message,
  explanation,
  onTryAgain,
  onContinue
}: FeedbackPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      // Small delay to ensure the transition works
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
      <div 
        className={`bg-white rounded-t-xl p-6 sm:p-8 max-w-md w-full space-y-4 border-t-4 border-x-4 border-yellow-400 transform transition-transform duration-300 ease-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '60vh' }}
      >
        {/* Icon */}
        <div className="w-16 h-16 mx-auto">
          {isCorrect ? (
            <div className="w-full h-full bg-emerald-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-emerald-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          ) : (
            <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center title-text">
          {message}
        </h2>

        {/* Explanation */}
        {explanation && (
          <p className="text-gray-600 text-center mb-6">
            {explanation}
          </p>
        )}

        {/* Buttons */}
        <div className="space-y-3 mt-auto">
          {onTryAgain && (
            <DuoTemplateButton
              variant="feather"
              onClick={onTryAgain}
              fullWidth
            >
              Try Again
            </DuoTemplateButton>
          )}
          <DuoTemplateButton
            variant="macaw"
            onClick={onContinue}
            fullWidth
          >
            Continue
          </DuoTemplateButton>
        </div>
      </div>
    </div>
  )
}

export default FeedbackPopup 