'use client'

import Image from 'next/image'
import { DuoTemplateButton } from '../buttons/page'
import { FeedbackState } from '../types'

interface FeedbackPopupProps extends FeedbackState {
  onTryAgain?: () => void
  onContinue: () => void
}

export default function FeedbackPopup({
  show,
  isCorrect,
  message,
  explanation,
  onTryAgain,
  onContinue
}: FeedbackPopupProps) {
  if (!show) return null

  return (
    <div className="fixed inset-x-0 bottom-0 p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-md mx-auto shadow-lg border-4 border-yellow-400">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full border-4 border-yellow-400 overflow-hidden">
              <Image
                src="/images/mrfb.jpg"
                alt="Mr. Fluffbutt"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-xl font-bold text-gray-900 mb-1">
              {isCorrect ? 'Purr-fect!' : 'Meow No!'}
            </div>
            <div className="text-lg text-gray-700">
              {message}
            </div>
            {explanation && (
              <div className="text-sm text-gray-600 mt-2">
                {explanation}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          {!isCorrect && onTryAgain && (
            <DuoTemplateButton
              variant="pink"
              onClick={onTryAgain}
            >
              Try Again
            </DuoTemplateButton>
          )}
          {isCorrect && (
            <DuoTemplateButton
              variant="blue"
              onClick={onContinue}
            >
              Continue
            </DuoTemplateButton>
          )}
        </div>
      </div>
    </div>
  )
} 