'use client'

import { useState, useEffect } from 'react'

export const DuoTemplateButton = ({ 
  children,
  onClick, 
  variant = 'pink',
  className = '',
  disabled = false,
  type = 'button'
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'pink' | 'green' | 'yellow' | 'blue';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}) => {
  const [buttonSound, setButtonSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setButtonSound(new Audio('/sounds/buttonpress.mp3'));
  }, []);

  // Exact colors from the image with their darker variants for bottom border
  const colorSchemes = {
    pink: {
      bg: 'bg-[#FF6B8A]',
      border: 'border-b-[#E85F7B]',
      hover: 'hover:opacity-95'
    },
    green: {
      bg: 'bg-[#4ADE80]',
      border: 'border-b-[#3FC772]',
      hover: 'hover:opacity-95'
    },
    yellow: {
      bg: 'bg-[#FFB020]',
      border: 'border-b-[#E69E1D]',
      hover: 'hover:opacity-95'
    },
    blue: {
      bg: 'bg-[#3C82F6]',
      border: 'border-b-[#3575DD]',
      hover: 'hover:opacity-95'
    }
  };

  const scheme = colorSchemes[variant];

  const handleClick = () => {
    if (buttonSound && !disabled) {
      buttonSound.currentTime = 0;
      buttonSound.play();
    }
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={type}
      className={`
        w-full p-6 rounded-[24px] transition-all duration-200
        ${scheme.bg} ${scheme.border} ${scheme.hover}
        text-white text-center text-3xl font-bold
        shadow-lg border-b-[6px]
        active:translate-y-[2px] active:border-b-[4px]
        active:shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// Demo page showing all button variants
export default function DuoTemplateButtonsDemo() {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const buttons = [
    { label: '$5', variant: 'pink' },
    { label: '$10', variant: 'green' },
    { label: '$15', variant: 'yellow' },
    { label: '$20', variant: 'blue' }
  ] as const;

  return (
    <div className="min-h-screen bg-[#FFFDD0] p-8">
      <div className="max-w-md mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Duo Template Buttons</h1>
        {buttons.map((button, index) => (
          <DuoTemplateButton
            key={index}
            variant={button.variant}
            onClick={() => setSelectedButton(index)}
          >
            {button.label}
          </DuoTemplateButton>
        ))}
      </div>
    </div>
  );
} 