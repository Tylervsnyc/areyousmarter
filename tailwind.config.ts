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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
