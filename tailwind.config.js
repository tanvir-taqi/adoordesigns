/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFDB00",
          secondary: "#141414",
          
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}