import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-8">
          So You Think You&apos;re Smarter Than Mr. Fluffbutt?
        </h1>
        <button 
          className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-purple-700 transition-colors"
          onClick={() => window.location.href = '/quiz'}
        >
          Take the Quiz!
        </button>
      </div>
    </main>
  )
}
