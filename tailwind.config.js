/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'aftasColor': '#1a81ba'
      }
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}
