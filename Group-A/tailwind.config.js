/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primaryRegular:["Regular"],
        primarySemibold:["Semibold"],
        primaryBold:["Bold"],
        secondaryRegular:["RegularSecond"],
        secondarySemibold:["SemiboldSecond"]
      },
    },
  },
  plugins: [],
}

