'use client'

interface BackgroundPatternProps {
  pattern: 'grid' | 'paper' | 'dots' | 'brush' | 'waves';
  tone?: 'light' | 'warm' | 'cool';
  className?: string;
  children?: React.ReactNode;
}

export default function BackgroundPattern({
  pattern = 'grid',
  tone = 'light',
  className = '',
  children
}: BackgroundPatternProps) {
  const patterns = {
    grid: 'bg-pattern-grid',
    paper: 'bg-pattern-paper',
    dots: 'bg-pattern-dots',
    brush: 'bg-pattern-brush',
    waves: 'bg-pattern-waves'
  }

  const tones = {
    light: 'bg-watercolor-light gradient-overlay-light',
    warm: 'bg-watercolor-warm gradient-overlay-warm',
    cool: 'bg-watercolor-cool gradient-overlay-cool'
  }

  return (
    <div className={`relative min-h-screen ${tones[tone]} ${className}`}>
      <div className={`absolute inset-0 ${patterns[pattern]} pattern-blend`} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 