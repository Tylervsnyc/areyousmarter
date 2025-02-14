'use client'

import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface DuoTemplateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'emerald' | 'rose' | 'amber' | 'feather' | 'cardinal' | 'macaw' | 'bee' | 'lilac'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const variantStyles = {
  blue: "bg-blue-600 hover:bg-blue-700 border-blue-700 button-3d",
  emerald: "bg-emerald-500 hover:bg-emerald-600 border-emerald-600 button-3d",
  rose: "bg-rose-500 hover:bg-rose-600 border-rose-600 button-3d",
  amber: "bg-amber-500 hover:bg-amber-600 border-amber-600 button-3d",
  feather: "bg-[#89e219] hover:bg-[#7ac717] border-[#7ac717] button-3d",
  cardinal: "bg-[#ff4b4b] hover:bg-[#e64343] border-[#e64343] button-3d",
  macaw: "bg-[#1cb0f6] hover:bg-[#199edc] border-[#199edc] button-3d",
  bee: "bg-[#ffc800] hover:bg-[#e6b400] border-[#e6b400] button-3d",
  lilac: "bg-[#ce82ff] hover:bg-[#b974e6] border-[#b974e6] button-3d"
}

const sizeStyles = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-3 px-6 text-base',
  lg: 'py-4 px-8 text-lg'
}

export const DuoTemplateButton = ({
  children,
  variant = 'blue',
  size = 'md',
  fullWidth = true,
  className,
  disabled,
  ...props
}: DuoTemplateButtonProps) => {
  return (
    <button
      className={clsx(
        'font-bold rounded-xl shadow-lg transition-all text-white border-b-4',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : 'w-auto',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default DuoTemplateButton 