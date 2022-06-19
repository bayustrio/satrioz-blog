/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{tsx,ts,js,jsx}",
    "./components/**/*.{tsx,ts,jsx,js}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        // light
        yellowLight: "#F7F8FE",
        yellowNav: "#FEFEFF",
        // dark
        bgDark: "#151D2F",
        blackLight: "#303135",
        // card black
        blackCard: "#1E2A47",
      },
    },
  },
  plugins: [],
};
