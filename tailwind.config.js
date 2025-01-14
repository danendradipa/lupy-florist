/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#286157',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '6rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        head: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}