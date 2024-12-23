/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          primary: '#3b82f6', // Original blue
          secondary: '#1e3a8a',
          accent: '#60a5fa',
          dark: '#0f172a',
        },
      },
      animation: {
        'cyber-pulse': 'cyber-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cyber-scan': 'cyber-scan 2s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'reverse-spin': 'reverse-spin 8s linear infinite',
      },
      keyframes: {
        'cyber-pulse': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.5)' },
        },
        'cyber-scan': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'reverse-spin': {
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, #3b82f610 1px, transparent 1px), linear-gradient(to bottom, #3b82f610 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};