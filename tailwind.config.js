/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'serif'],
        sans: ['"Times New Roman"', 'Times', 'serif'], // Setting sans to Times New Roman as requested for headings + body
      },
      colors: {
        primary: {
          DEFAULT: "#080F4A",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#182B0C",
          foreground: "#000000",
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
