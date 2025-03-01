/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      britti: ['MiFuente', 'sans-serif'],
    },
    scrollbar: {
      thin: "w-1 bg-transparent",
      thumb: "bg-gray-500 rounded-full",
    },
  },
  plugins: [],
}