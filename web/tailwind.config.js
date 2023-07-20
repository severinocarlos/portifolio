/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#151A20',
        'blue': '#237EC8',
        'white-background': '#F6F8F9',
        'basic-gray': '#909DAD',
        'full-black': '#000000'

      }
    },
  },
  plugins: [],
}

