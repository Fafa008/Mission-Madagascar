/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#006fff',
        'primary-hover': '#0056cc',
        'blue': {
          600: '#006fff',
          700: '#0056cc'
        }
      }
    },
  },
  plugins: [],
};