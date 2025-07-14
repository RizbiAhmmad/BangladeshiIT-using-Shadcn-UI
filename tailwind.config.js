/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // ✅ Enables manual dark mode via `.dark` class
  theme: {
    extend: {},
  },
  plugins: [],
};
