/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#10B981',
        secondary:'#31363F',
        tertiary:'#F5ECD5',
        brightGray:'#FFFAEC'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}