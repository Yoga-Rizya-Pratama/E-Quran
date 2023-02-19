/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      os: ["Open Sans", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      mynerver: ["Mynerve", "cursive"],
      poppins: ["Poppins", "sans-serif"],
      arabic: ["Noto Naskh Arabic", "serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
