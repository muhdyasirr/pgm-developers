import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c8a96e',
          light: '#e4c99a',
          dark: '#a07840',
        },
        dark: {
          DEFAULT: '#0d0d0d',
          2: '#111111',
          3: '#1a1a1a',
          4: '#222222',
        },
        light: {
          DEFAULT: '#ffffff',
          2: '#f8fafc',
          3: '#f1f5f9',
        }
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bar-reveal': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'bar-reveal': 'bar-reveal 0.8s cubic-bezier(0.87, 0, 0.13, 1) forwards',
      },
    },
  },
  plugins: [],
}
export default config
