/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'serif'],
      },
      colors: {
        'body': '#171717',
        'primary': '#3B82F6',
        'primary-darker': '#3c78da',
        'info': '#737373',
      }
    },
  },
  plugins: [],
}

