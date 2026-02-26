import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0F0F0',
        foreground: '#121212',
        'primary-red': '#D02020',
        'primary-blue': '#1040C0',
        'primary-yellow': '#F0C020',
        border: '#121212',
        muted: '#E0E0E0',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'hard-sm': '3px 3px 0px 0px black',
        'hard': '4px 4px 0px 0px black',
        'hard-md': '6px 6px 0px 0px black',
        'hard-lg': '8px 8px 0px 0px black',
      },
      lineHeight: {
        'extra-tight': '0.9',
      },
    },
  },
  plugins: [],
}

export default config
