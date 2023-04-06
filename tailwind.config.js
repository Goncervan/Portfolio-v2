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
        bgBlack:'#000000',
        customBlue:'#1AB1C6',
        customGray:'#292929',
        customLigthBlue:'#E9F8F9',
      }
    },
  },
  plugins: [],
}

