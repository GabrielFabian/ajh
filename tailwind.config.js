const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Rajdhani"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: "#FD3850",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
