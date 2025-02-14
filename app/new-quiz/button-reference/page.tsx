'use client'

import { DuoTemplateButton } from '../components/DuoTemplateButton'

export default function ButtonReferencePage() {
  return (
    <div className="min-h-screen relative">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-[#FFFDD0]" /> {/* Cream */}
        <div className="w-1/2 bg-[#FFFFF0]" /> {/* Ivory */}
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="max-w-md mx-auto space-y-8">
          <h1 className="text-2xl font-bold text-center mb-8">Button Reference Page</h1>
          
          {/* Box Shadow Variations */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Box Shadow Variations</h2>
            
            <button className="w-full px-6 py-3 bg-white rounded-xl text-gray-800 shadow-sm hover:shadow transition-shadow duration-200">
              Subtle Shadow
            </button>

            <button className="w-full px-6 py-3 bg-white rounded-xl text-gray-800 shadow-md hover:shadow-lg transition-shadow duration-200">
              Medium Shadow
            </button>

            <button className="w-full px-6 py-3 bg-white rounded-xl text-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-200">
              Large Shadow
            </button>

            <button className="w-full px-6 py-3 bg-white rounded-xl text-gray-800 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none transition-all duration-200">
              Pressed Effect Shadow
            </button>

            <button className="w-full px-6 py-3 bg-white rounded-xl text-gray-800 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200">
              Retro Pixel Shadow
            </button>

            <button className="w-full px-6 py-3 bg-white rounded-xl text-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow duration-200">
              Soft Glow Shadow
            </button>

            <button className="w-full px-6 py-3 bg-white rounded-xl text-gray-800 shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.1)] active:shadow-[inset_0_4px_0_0_rgba(0,0,0,0.1)] transition-shadow duration-200">
              Inset Shadow
            </button>

            <button className="w-full px-6 py-3 bg-white rounded-xl text-gray-800 shadow-[4px_4px_0_0_#4CAF50,-4px_-4px_0_0_#2196F3] hover:shadow-[2px_2px_0_0_#4CAF50,-2px_-2px_0_0_#2196F3] transition-shadow duration-200">
              Dual Color Shadow
            </button>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Custom Colors</h2>
            <DuoTemplateButton variant="feather">
              Feather Green Button
            </DuoTemplateButton>
            <DuoTemplateButton variant="cardinal">
              Cardinal Red Button
            </DuoTemplateButton>
            <DuoTemplateButton variant="macaw">
              Macaw Blue Button
            </DuoTemplateButton>
            <DuoTemplateButton variant="bee">
              Bee Yellow Button
            </DuoTemplateButton>
            <DuoTemplateButton variant="lilac">
              Lilac Purple Button
            </DuoTemplateButton>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Standard Colors</h2>
            <DuoTemplateButton variant="blue">
              Blue Button
            </DuoTemplateButton>
            <DuoTemplateButton variant="emerald">
              Emerald Button
            </DuoTemplateButton>
            <DuoTemplateButton variant="rose">
              Rose Button
            </DuoTemplateButton>
            <DuoTemplateButton variant="amber">
              Amber Button
            </DuoTemplateButton>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Different Sizes</h2>
            <DuoTemplateButton variant="macaw" size="sm">
              Small Button
            </DuoTemplateButton>
            <DuoTemplateButton variant="macaw" size="md">
              Medium Button
            </DuoTemplateButton>
            <DuoTemplateButton variant="macaw" size="lg">
              Large Button
            </DuoTemplateButton>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Disabled State</h2>
            <DuoTemplateButton variant="macaw" disabled>
              Disabled Button
            </DuoTemplateButton>
          </div>
        </div>
      </div>
    </div>
  )
} 