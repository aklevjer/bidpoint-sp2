/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/**/*.mjs"],
  theme: {
    extend: {
      colors: {
        "dark-orange": "#9D3700",
        "light-orange": "#F68A50",
        green: "#186526",
        red: "#B50000",
        black: "#000000",
        "dark-gray": "#181818",
        gray: "#BFBFBF",
        "light-gray": "#FAFAFA",
        white: "#FFFFFF",
      },
      fontSize: {
        m: "0.9375rem",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1150px",
        },
      },
    },
  },
  plugins: [],
};
