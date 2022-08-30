/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/Components/HeroContainer.js",
    "./src/Pages/LandingPage.js",
    "./src/Pages/Training.js",
    "./src/Components/Programs.js",
    "./src/Components/Footer.js",
  ],
  theme: 
    {screens: {
      '2xl': {'max': '1200px'},

      'bxg': {'min': '1200px'},

      'lg': {'min': '769px'},

      'sm': {'max': '768px'},

      'md': {'max': '400px'},
    }
  },
  plugins: [],
}
