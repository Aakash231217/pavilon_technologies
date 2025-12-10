/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'footer-accent': '#D99C3F', // Golden yellow accent
      },
      animation: {
        'marquee-slow': 'marquee 30s linear infinite', // Adjust duration as needed
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Moves half of the duplicated content
        }
      }
    },
  },
  plugins: [],
};