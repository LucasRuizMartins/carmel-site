/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1a2744',
        'navy-dark': '#111c33',
        gold: '#b8963e',
        'gold-dark': '#9a7a2e',
        'light-gray': '#f5f5f5',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
