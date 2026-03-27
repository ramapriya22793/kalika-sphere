/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kalika: {
          red: "#DF1B25",
          orange: "#FFB347",
          blue: "#6EC6FF",
          dark: "#0E1B4D",
          green: "#8EE4AF",
          cream: "#FFF8F0",
        },
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        body: ['"Outfit"', 'sans-serif'],
        logo: ['"Plaster"', 'cursive'],
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'premium': '0 20px 50px -15px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
