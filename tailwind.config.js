/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        custom1: ['Europ', 'sans-serif'],
        halvar300: ['Halvar Breit Lt', 'sans-serif'],
        halvar500: ['Halvar Breit Md', 'sans-serif'],
        halvar800: ['Halvar Breit XBd', 'sans-serif'],
        halvar900: ['Halvar Breit Blk', 'sans-serif'],
        halvarNormal: ['Halvar Breit Rg', 'sans-serif'],
      },
      screens: {
        '1300px': '1300px'
      }
    },
  },
  plugins: [],
}

