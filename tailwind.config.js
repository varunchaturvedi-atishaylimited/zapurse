/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'serif'],
        sans: ['"Times New Roman"', 'Times', 'serif'], // Setting sans to Times New Roman as requested for headings + body
      },
      colors: {
        primary: {
          DEFAULT: "#0071e3",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f5f7", // Apple-like light gray
          foreground: "#1d1d1f",
        },
        accent: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
        background: "#ffffff",
        foreground: "#000000",
      },
    },
  },
  plugins: [],
}
