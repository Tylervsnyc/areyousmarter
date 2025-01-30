'use client'

import Certificate from '@/components/Certificate'

export default function CertificatePreview() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Certificate Preview</h1>
      <Certificate 
        studentName="Tyler Schwartz"
        chapterNumber={2}
        date="January 30, 2024"
      />
    </div>
  )
} 