/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cream: '#FAF3E0',
        lightCream: '#FFF8E1',
        darkText: '#2C2C2C',
        lightText: '#B0A99F',
        cobaltBlue: '#0047AB',
        turquoise: '#008CBA',
        redCream: '#C0392B',
        darkRedCream: '#800000',
        secondary: '#B0A99F',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Open Sans', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
        codePro: ['Source Code Pro', 'monospace'],
        anton: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

