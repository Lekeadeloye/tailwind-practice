/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(156, 76%, 40%)',
        'secondary': 'hsl(50, 60%, 78%)'
      }
    },
  },
  plugins: [],
}

