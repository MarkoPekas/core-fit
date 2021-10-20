module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        sexy: '#66f',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
