/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/pages/**/*.{js,jsx,ts,tsx}',
      './src/components/**/*.{js,jsx,ts,tsx}',
      './src/sections/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            'ikeaBlue': '#0058a3',
            'ikeaYellow': '#ffdb01',
            'ikeaLightBlue' : '#f6f8fe'
        }
    },

  },
    darkMode: "class",
    plugins: [
        require('@headlessui/tailwindcss')
    // Or with a custom prefix:
  ],
}
