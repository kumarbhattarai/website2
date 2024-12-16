/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'max-xs': '400px', // Custom breakpoint for extra small devices
      },
    },
  },
  plugins: [],
}

