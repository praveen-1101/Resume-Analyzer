/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60a5fa", // Light blue
          DEFAULT: "#2563eb", // Primary blue
          dark: "#1e40af", // Dark blue
        },
        accent: {
          light: "#fde68a", // Light yellow
          DEFAULT: "#f59e0b", // Accent yellow
        },
      },
    },
  },
  plugins: [],
};