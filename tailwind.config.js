/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimaryThin: '#86aaf9',
        colorPrimary: 'rgb(11 77 218)',
        colorSecondary: '#c52420',
        colorGray: '#eceef4'
      }
    },
  },
  plugins: [],
}