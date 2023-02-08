/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Montserrat', 'sans-serif'],
        decor: ['Jost', 'sans-serif'],
      },
      colors: {
        'my-dark-blue': 'hsl(240, 27%, 18%)',
        'my-light-blue': 'hsl(232, 17%, 35%)',
        'my-purple': 'hsl(309, 6%, 58%)',
        'my-tan': 'hsl(11, 24%, 72%)',
        'my-cream': 'hsl(21, 35%, 92%)'
    }
    },
  },
  plugins: [],
}