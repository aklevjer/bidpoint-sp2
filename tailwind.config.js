/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./auctions/*.html",
    "./auctions/listing/*.html",
    "./profile/*.html",
    "./src/js/**/*.mjs",
  ],
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
      fontFamily: {
        sans: ["Manrope", "Helvetica", "Verdana", "sans-serif"],
        poppins: ["Poppins", "Helvetica", "Verdana", "sans-serif"],
      },
      fontSize: {
        sm: "0.875rem;",
        m: "0.9375rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1150px",
        },
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      backgroundImage: {
        "banner-bg": "url('/assets/banner-background.jpg')",
      },
    },
  },
  plugins: [],
};
