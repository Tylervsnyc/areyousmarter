import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50">
      <div className="relative w-32 h-32 animate-bounce">
        <div className="absolute inset-0 rounded-full border-4 border-yellow-400 overflow-hidden">
          <Image
            src="/images/mrfb.jpg"
            alt="Mr. Fluffbutt Loading"
            fill
            className="object-cover animate-pulse"
            priority
          />
        </div>
      </div>
      <p className="mt-4 text-xl font-medium text-gray-600">
        Mr. Fluffbutt is calculating...
      </p>
    </div>
  )
} 