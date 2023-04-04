/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customDarkBlue:'#181823',
        customPrimaryBlue:'#537FE7',
        customSecondaryBlue:'#537FE7',
        customLigthBlue:'#E9F8F9',
      }
    },
  },
  plugins: [],
}

