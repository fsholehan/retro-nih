/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      boxShadow: {
        retro: "2px 2px 0 2px rgba(0, 0, 0, 1)",
      },
      colors: {
        dark: "#272935",
        "btn-dark": "#353744",
      },
    },
  },
  plugins: [],
};
