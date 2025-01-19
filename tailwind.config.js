/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF0000',
          yellow: '#FFB800',
          green: '#00FF00',
          blue: '#0088FF',
        },
      },
    },
  },
  plugins: [],
}

