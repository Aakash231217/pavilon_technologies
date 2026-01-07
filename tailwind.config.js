/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#030712', // Deep Void (very dark blue/black)
        surface: '#0f172a',    // Dark Slate
        primary: '#3b82f6',    // Bright Blue
        secondary: '#6366f1',  // Indigo
        accent: '#06b6d4',     // Cyan
        
        // Futuristic Palette
        'neon-blue': '#00f3ff',
        'neon-purple': '#b026ff',
        'cyber-black': '#0a0a0f',
        'deep-space': '#050510',
        
        // Human Friendly
        'human-warmth': '#f59e0b', // Amber
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee-slow': 'marquee 30s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff' },
          'to': { boxShadow: '0 0 20px #b026ff, 0 0 30px #b026ff' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      }
    },
  },
  plugins: [],
};