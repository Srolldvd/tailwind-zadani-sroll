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
        'body-secondary': '#E5E5E5',
        'primary': '#3B82F6',
        'primary-darker': '#3c78da',
        'info': '#737373',
        'error': '#DC2626',
      },
      backgroundImage: {
        'flag-icon': 'url(/public/flag-icon.svg)',
      }
    },
  },
  plugins: [],
}

