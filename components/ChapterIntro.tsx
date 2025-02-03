import Image from "next/image";
import Link from "next/link";

const ChapterIntro = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-between items-center bg-gradient-to-b from-blue-100 to-white p-6 text-center">
      {/* Title */}
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Are You Smarter Than Mr. Fluff Butt?
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mt-2">
          Chapter 2: The Royal Business Venture
        </h2>
      </div>

      {/* Host Image & Intro Text */}
      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-center mt-4 md:mt-8 space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 relative rounded-full border-4 border-yellow-500 overflow-hidden">
          <Image
            src="/images/mrfb.jpg" // Updated image path
            alt="Mr. Fluff Butt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-lg text-gray-800 max-w-lg leading-relaxed">
          Welcome back to my kingdom of numbers, tiny humans! I see you’ve returned
          for more mathematical wisdom from the most brilliant feline mind of our time.
          Today, we'll be counting money—one of my favorite activities, right after
          napping and treat-counting.
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-3xl flex flex-col md:flex-row justify-center gap-4 mt-6">
        <Link href="/story">
          <a className="w-full md:w-48 px-6 py-3 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl shadow-md transition-all">
            Read the Story
          </a>
        </Link>
        <Link href="/quiz">
          <a className="w-full md:w-48 px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-all">
            Begin Your Royal Adventure
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ChapterIntro;