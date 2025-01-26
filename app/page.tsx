import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-purple-800 text-center mb-6">
        So You Think You're Smarter Than Mr. Fluffbutt?
      </h1>
      <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl hover:bg-purple-700">
        Take the Quiz!
      </button>
    </div>
  )
}
