/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A2E",
        secondary: "#FF9C01",
        danger: "#FB1329",
        white: "#FFFEFD",
        grey: "#D9D9D9",
        darkGrey: "#808080",
        black: "#13131C",
      },
      fontFamily: {
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        vmedium: ["Vollkorn-Medium", "serif"],
        vbold: ["Vollkorn-Bold", "serif"],
      },
    },
  },
  plugins: [],
}

