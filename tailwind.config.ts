/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'slate-blue': '#4b6684',
      'black-color': '#000000',
      'electric-purple': '#13ce66',
      'white-color': '#ffffff',
    },
    extend: {},
  },
  plugins: [],
}
