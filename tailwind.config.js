/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        headind: ['Lora', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        slate: require('tailwindcss/colors').slate,
        gray: require('tailwindcss/colors').gray,
        zinc: require('tailwindcss/colors').zinc,
        neutral: require('tailwindcss/colors').neutral,
        stone: require('tailwindcss/colors').stone,
      },
    },
  },
  plugins: [],
}
