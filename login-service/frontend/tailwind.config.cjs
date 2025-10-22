/**** Tailwind Config ****/ 
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        card: "#0b1224",
        foreground: "#e2e8f0",
        primary: {
          DEFAULT: "#22c55e",
          foreground: "#052e16"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.35)"
      }
    }
  },
  plugins: []
}
