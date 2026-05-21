/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 深海寧靜配色方案
        'app-bg': '#0f172a',      // 背景深藍
        'glass-bg': 'rgba(255, 255, 255, 0.05)', // 玻璃背景透明度
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'accent-cyan': '#22d3ee', // 主重點色 (青色)
        'accent-purple': '#818cf8', // 次重點色 (藍紫色)
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        // 用於錄音中的波動效果
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}