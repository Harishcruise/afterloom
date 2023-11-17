/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'black':'#000000',
      'white': '#ffffff',
      'background': {
        100: '#040404',
        400: '#8C8C8C',
        500: '#686868',
        600: '#464646',
        700: '#262626',
      },
      'grey': {
        100: '#DADADA',
        200: '#B3B3B3',
        300: '#B2B2B2',
      },
      'light': {
        100: '#F8F9FA',
      },
    },
  },
  plugins: [],
}