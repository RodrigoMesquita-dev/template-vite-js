/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/hero-pattern.png')"
      },
      colors:{
        'primary': '#9B59B6', // <div class='bg-tutorial-green'> pra chamar por exemplo.
        'secondary': '#6C6C6C'
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}