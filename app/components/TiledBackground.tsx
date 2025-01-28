import { ReactNode } from 'react'
import Image from 'next/image'

interface TiledBackgroundProps {
  children: ReactNode
  pattern?: 'dots' | 'grid' | 'paper' | 'brush' | 'waves'
  tone?: 'light' | 'warm' | 'cool'
}

export default function TiledBackground({ children, pattern = 'dots', tone = 'light' }: TiledBackgroundProps) {
  const bgImages = [
    '/images/backgrounds/bg1.jpg',
    '/images/backgrounds/bg2.jpg',
    '/images/backgrounds/bg3.jpg',
    '/images/backgrounds/bg4.jpg'
  ]

  // Get random background image
  const randomBg = bgImages[Math.floor(Math.random() * bgImages.length)]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={randomBg}
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent" />
      </div>

      {/* Tiled Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 [mask-image:url(/tiles.svg)] bg-neutral-50/[0.2]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/10 to-transparent blur-xl">
            <div className="absolute inset-0 bg-[size:6rem_4rem] bg-neutral-200/30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]" />
            <div className="absolute inset-0 bg-[size:6rem_4rem] bg-neutral-200/20 [background-image:radial-gradient(circle_4px_at_center,rgba(255,255,255,0.1)_90%,transparent_0%)]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 