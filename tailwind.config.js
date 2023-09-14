/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "light-green": "rgba(206, 255, 26, 1)",
      "purple": "#DAC3FF",
      "purple-text": "#9747FF"
    },
    boxShadow: {
      "button": "4px 4px 0px 0px rgba(0, 0, 0, 1)",
    },
    fontFamily: {
      "work": ['Work Sans', "sans-serif"],
      'grotesk': ['Space Grotesk', "sans-serif"]
    }
  },
  plugins: [],
}