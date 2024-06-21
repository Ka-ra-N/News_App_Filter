/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        background : '#0F0F0F',
        primary: "#dd4d51",
        secondary:"#353535",
        accent1: "#00999b",
        textClr:"#FFFFFF"
      }
    },
  },
  plugins: [],
}

