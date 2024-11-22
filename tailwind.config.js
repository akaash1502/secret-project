/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Dancing Script', 'cursive'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};