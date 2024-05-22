/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        logoGreen : "#25590B",
        GreenBite : "#C5F2AE"
      }
    },
  },
  plugins: [],
}