'use client'

import { useState } from 'react'

export default function SortingTest() {
  return (
    <div className="min-h-screen bg-[rgb(252,250,245)] p-2 sm:p-4">
      {/* Main container */}
      <div className="max-w-3xl mx-auto h-[calc(100vh-1rem)] flex flex-col">
        
        {/* Top section with two columns */}
        <div className="flex-1 flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4">
          {/* Left Column - Safe Animals */}
          <div className="flex-1 border-4 border-green-400 rounded-xl bg-white/80 p-2 sm:p-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 text-center mb-2 sm:mb-4">
              Safe Animals
            </h2>
            <div className="flex flex-col gap-2 sm:gap-4">
              {/* Placeholder boxes for dropped items */}
              <div className="h-16 sm:h-20 border-2 border-dashed border-green-300 rounded-lg"></div>
              <div className="h-16 sm:h-20 border-2 border-dashed border-green-300 rounded-lg"></div>
              <div className="h-16 sm:h-20 border-2 border-dashed border-green-300 rounded-lg"></div>
            </div>
          </div>

          {/* Right Column - Danger Zone */}
          <div className="flex-1 border-4 border-red-400 rounded-xl bg-white/80 p-2 sm:p-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 text-center mb-2 sm:mb-4">
              Danger Zone Animals
            </h2>
            <div className="flex flex-col gap-2 sm:gap-4">
              {/* Placeholder boxes for dropped items */}
              <div className="h-16 sm:h-20 border-2 border-dashed border-red-300 rounded-lg"></div>
              <div className="h-16 sm:h-20 border-2 border-dashed border-red-300 rounded-lg"></div>
              <div className="h-16 sm:h-20 border-2 border-dashed border-red-300 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Bottom section with draggable items */}
        <div className="h-24 sm:h-28 bg-white/90 rounded-xl border-4 border-yellow-400 p-2 sm:p-4">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 h-full">
            {/* Draggable items - all in blue theme */}
            <div className="h-full bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
              Left 1
            </div>
            <div className="h-full bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
              Left 2
            </div>
            <div className="h-full bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
              Left 3
            </div>
            <div className="h-full bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
              Right 1
            </div>
            <div className="h-full bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
              Right 2
            </div>
            <div className="h-full bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-semibold p-1 text-center">
              Right 3
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 