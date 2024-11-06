/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],   
        'playfair-semibold': ['Playfair Display', 'semiBold']  
      }
    },
  },
  plugins: [],
};
