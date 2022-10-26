/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A7081',
        primaryDark: '#384D55',
        whiteL: '#fff',
        black: '#000',
      },
      fontFamily: {
        archia: ['Archia'],
      },
      borderRadius: {
        super: '0px 0px 0px 65px',
      },
    },
  },
  plugins: [],
}
