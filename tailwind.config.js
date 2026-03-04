/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deepSea: '#003366',
        paper: '#FCFCFA',
        ink: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        rubik: ['Rubik', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

