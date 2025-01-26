import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-100 flex flex-col items-center justify-center p-4">
      {/* Substack Link */}
      <a 
        href="https://substack.com/@tylervschwartz" 
        className="fixed top-4 right-4 transition-transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/substack.jpg"
          alt="Follow on Substack"
          width={50}
          height={50}
          className="rounded-lg shadow-md"
        />
      </a>

      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <Image
            src="/images/mrfb.jpg"
            alt="Mr. Fluffbutt"
            width={200}
            height={200}
            className="rounded-full border-4 border-purple-600 mx-auto"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-8">
          So You Think You&apos;re Smarter Than Mr. Fluffbutt?
        </h1>
        
        <button 
          className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-purple-700 transition-all hover:-translate-y-1"
          onClick={() => window.location.href = '/quiz'}
        >
          Take the Quiz!
        </button>
      </div>
    </main>
  )
}
