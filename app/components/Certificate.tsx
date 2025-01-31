'use client'

import Image from 'next/image'

interface CertificateProps {
  studentName: string
  chapterNumber: string
}

export default function Certificate({ studentName, chapterNumber }: CertificateProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto bg-yellow-50 border-8 border-yellow-400 rounded-lg p-8 shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <Image
          src="/images/certificate-bg.jpg"
          alt="Certificate Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10 text-center space-y-6">
        <div className="text-4xl font-serif text-yellow-800">Certificate of Achievement</div>
        
        <div className="text-xl text-gray-700">
          This certifies that
        </div>
        
        <div className="text-3xl font-bold text-blue-600 font-serif">
          {studentName}
        </div>
        
        <div className="text-xl text-gray-700">
          has demonstrated exceptional mathematical prowess in
        </div>
        
        <div className="text-2xl font-bold text-yellow-800">
          Chapter {chapterNumber}
        </div>
        
        <div className="text-xl text-gray-700">
          and has earned the title of
        </div>
        
        <div className="text-3xl font-bold text-purple-600 font-serif">
          Royal Mathematical Scholar
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="relative w-24 h-24">
            <Image
              src="/images/mrfb.jpg"
              alt="Mr. Fluffbutt's Seal of Approval"
              fill
              className="object-cover rounded-full border-4 border-yellow-400"
              priority
            />
          </div>
        </div>
        
        <div className="text-lg text-gray-600 italic">
          Certified by Mr. Fluffbutt, Royal Mathematical Examiner
        </div>
      </div>
    </div>
  )
} 