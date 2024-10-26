/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C4DAD2', 
        secondary: '#417D7A',
        tertiary:'#16423C',
        quaternary:'#EDE6DB',

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sansita: ['Sansita', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
