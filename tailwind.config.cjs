/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'strage1': "url('/src/assets/strages/pic-1.jpeg')",
        'strage2': "url('/src/assets/strages/pic-2.jpeg')",
        'strage3': "url('/src/assets/strages/pic-3.jpeg')",
        'strage4': "url('/src/assets/strages/pic-4.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
