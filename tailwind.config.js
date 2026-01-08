/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark Theme with Better Visibility
        background: '#0a0a0f',
        surface: '#12121a',
        
        // Brighter Accent Colors
        primary: '#818cf8',    // Brighter Indigo
        secondary: '#a78bfa',  // Brighter Purple  
        accent: '#f472b6',     // Brighter Pink
        
        // Visible Grays
        'gray-950': '#0a0a0f',
        'gray-900': '#12121a',
        'gray-800': '#1e1e2a',
        'gray-700': '#2d2d3a',
        'gray-600': '#4a4a5a',
        
        // Legacy support - Brighter
        'neon-blue': '#818cf8',
        'neon-purple': '#a78bfa',
        'cyber-black': '#0a0a0f',
        'deep-space': '#0a0a0f',
        'human-warmth': '#fbbf24',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'morph': 'morphBlob 8s ease-in-out infinite',
        'gradient': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'rotate-3d': 'rotate3d 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        morphBlob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rotate3d: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg) rotateX(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};