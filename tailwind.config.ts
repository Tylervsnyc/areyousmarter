import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#171717',
            a: {
              color: '#3B82F6',
              '&:hover': {
                color: '#2563EB',
              },
            },
            h1: {
              color: '#171717',
              fontWeight: '700',
            },
            h2: {
              color: '#171717',
              fontWeight: '600',
            },
            h3: {
              color: '#171717',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        'imperial': {
          css: {
            '--tw-prose-body': '#4B5563',
            '--tw-prose-headings': '#111827',
            '--tw-prose-links': '#D97706',
            '--tw-prose-bold': '#111827',
            '--tw-prose-quotes': '#111827',
            '--tw-prose-quote-borders': '#F59E0B',
            '--tw-prose-counters': '#6B7280',
            '--tw-prose-bullets': '#6B7280',
            '--tw-prose-hr': '#E5E7EB',
            '--tw-prose-th-borders': '#D1D5DB',
            '--tw-prose-td-borders': '#E5E7EB',
          },
        },
      },
      animation: {
        'bounce-gentle': 'bounce 3s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'pulse-subtle': 'pulse 2s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
