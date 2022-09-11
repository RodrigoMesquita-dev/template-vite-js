/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/hero-pattern.png')",
        'about-pattern': "url('./images/about-pattern.png')",
        'form-pattern': "url('./images/form-pattern.png')",
        'portfolio-work-background': "url('./images/portfolio-work-background.svg')"
      },
      colors:{
        'primary': '#9B59B6', // <div class='bg-tutorial-green'> pra chamar por exemplo.
        'secondary': '#6C6C6C',
        'formBackground': '#73D48C',
        'formFieldBorder': '#26547C',
      },
      width: {
        '495': '459px'
      },

      height: {
        '285': '285px'
      }
      
    },    
  },

  variants: {
    extend: {},
  },
  plugins: [],
}