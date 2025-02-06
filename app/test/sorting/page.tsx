'use client'

import { useState } from 'react'

export default function SortingTest() {
  return (
    <div className="min-h-screen bg-[rgb(252,250,245)] p-4">
      {/* Main container */}
      <div className="max-w-4xl mx-auto h-[calc(100vh-2rem)] flex flex-col">
        
        {/* Top section with two columns */}
        <div className="flex-1 flex gap-4 mb-4">
          {/* Left Column - Safe Animals */}
          <div className="flex-1 border-4 border-green-400 rounded-xl bg-white/80 p-4">
            <h2 className="text-2xl font-bold text-green-600 text-center mb-4">
              Safe Animals
            </h2>
            <div className="h-full flex flex-col gap-4">
              {/* Placeholder boxes for dropped items */}
              <div className="h-24 border-2 border-dashed border-green-300 rounded-lg"></div>
              <div className="h-24 border-2 border-dashed border-green-300 rounded-lg"></div>
              <div className="h-24 border-2 border-dashed border-green-300 rounded-lg"></div>
            </div>
          </div>

          {/* Right Column - Danger Zone */}
          <div className="flex-1 border-4 border-red-400 rounded-xl bg-white/80 p-4">
            <h2 className="text-2xl font-bold text-red-600 text-center mb-4">
              Danger Zone Animals
            </h2>
            <div className="h-full flex flex-col gap-4">
              {/* Placeholder boxes for dropped items */}
              <div className="h-24 border-2 border-dashed border-red-300 rounded-lg"></div>
              <div className="h-24 border-2 border-dashed border-red-300 rounded-lg"></div>
              <div className="h-24 border-2 border-dashed border-red-300 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Bottom section with draggable items */}
        <div className="h-32 bg-white/90 rounded-xl border-4 border-yellow-400 p-4">
          <div className="flex justify-around items-center h-full">
            {/* Draggable items */}
            <div className="w-24 h-20 bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center font-semibold">
              Left 1
            </div>
            <div className="w-24 h-20 bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center font-semibold">
              Left 2
            </div>
            <div className="w-24 h-20 bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center font-semibold">
              Left 3
            </div>
            <div className="w-24 h-20 bg-purple-100 rounded-lg border-2 border-purple-300 flex items-center justify-center font-semibold">
              Right 1
            </div>
            <div className="w-24 h-20 bg-purple-100 rounded-lg border-2 border-purple-300 flex items-center justify-center font-semibold">
              Right 2
            </div>
            <div className="w-24 h-20 bg-purple-100 rounded-lg border-2 border-purple-300 flex items-center justify-center font-semibold">
              Right 3
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 