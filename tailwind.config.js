/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'app-bg': '#0A0A0A',          
        'main-gold': '#B39D81',       
        'hero-steady': '#B5A478',     
        'text-grey': '#A0A0A0',       
        'line-gold': 'rgba(255, 255, 255, 0.08)', 
      },
      fontFamily: {

        serif: ['serif', 'Noto Serif TC', 'Georgia', 'ui-serif'],
      },
      animation: {

        'global-breathe': 'globalBreathe 3s infinite ease-in-out',

        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        globalBreathe: {
          '0%, 100%': { opacity: '0.15', width: '120px' },
          '50%': { opacity: '0.6', width: '180px' },
        }
      }
    },
  },
  plugins: [],
}
