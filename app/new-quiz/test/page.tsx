'use client'

import { useRouter } from 'next/navigation'
import { DuoTemplateButton } from '../components/DuoTemplateButton'
import DuoHeader from '../components/DuoHeader'
import { duoDefaultTheme } from '../styles'

const TestPage = () => {
  const router = useRouter()

  const handleAgeGroupSelect = (ageGroup: string) => {
    router.push(`/new-quiz/test/quiz?age=${ageGroup}`)
  }

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <DuoHeader />

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: duoDefaultTheme.backgroundColor }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Title Box */}
              <div 
                className="rounded-xl border-4 p-6 sm:p-8 mb-8"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center title-text mb-4">
                  Quiz Test Page - Chapter 1
                </h1>
                
                {/* Age Group Selection */}
                <div className="flex flex-col gap-4">
                  <DuoTemplateButton
                    variant="feather"
                    onClick={() => handleAgeGroupSelect('age4to5')}
                  >
                    Ages 4-5
                  </DuoTemplateButton>
                  <DuoTemplateButton
                    variant="macaw"
                    onClick={() => handleAgeGroupSelect('age6to7')}
                  >
                    Ages 6-7
                  </DuoTemplateButton>
                  <DuoTemplateButton
                    variant="lilac"
                    onClick={() => handleAgeGroupSelect('age8to9')}
                  >
                    Ages 8-9
                  </DuoTemplateButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestPage 