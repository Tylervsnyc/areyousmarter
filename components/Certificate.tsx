import Image from 'next/image'

interface CertificateProps {
  studentName: string
  chapterNumber: string | number
  date?: string // Optional, will default to current date if not provided
}

export default function Certificate({ 
  studentName, 
  chapterNumber,
  date = new Date().toLocaleDateString('en-US', { 
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}: CertificateProps) {
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-[1.4/1]">
      <Image
        src="/images/cert.jpg"
        alt="Certificate Template"
        fill
        className="object-contain"
        priority
      />
      
      {/* Certificate Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative -top-[3%] w-[60%] space-y-1">
          <p className="text-black font-serif text-[10px] sm:text-[16px] md:text-xl text-center font-bold">
            {studentName}
          </p>
          <p className="text-black font-serif text-[8px] sm:text-[14px] md:text-base text-center">
            Chapter {chapterNumber} • {date}
          </p>
        </div>
      </div>
    </div>
  )
} 