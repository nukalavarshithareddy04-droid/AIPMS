/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070F',
          900: '#0B1020',
          800: '#121A2F',
          700: '#1A2440',
          600: '#243056',
        },
        violet: {
          DEFAULT: '#6D5EF8',
          50: '#F4F2FF',
          100: '#E8E4FF',
          200: '#C9C0FF',
          400: '#8B7CFF',
          500: '#6D5EF8',
          600: '#5646E0',
          700: '#4334C4',
        },
        cyan: { DEFAULT: '#22D3EE' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 30px rgba(15, 23, 42, 0.06)',
        glow: '0 0 40px rgba(109, 94, 248, 0.35)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
