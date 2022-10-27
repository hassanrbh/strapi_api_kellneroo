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
        help: "0px 0px 0px 130px",
      },
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
