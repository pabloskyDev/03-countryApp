/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#1976D2',
        'light-primary': '#BBDEFB',
        'primary': '#2196F3',
        'white:': '#FFFFFF',
        'black:': '#000000',
        'accent': '#cbcedc',
        'primary-text': '#194052',
        'gray': '#757575',
        'light-gray': '#BDBDBD',
      }
    },
    fontSize: {
      xs: ['12px', '14px'],
      sm: ['14px', '16px'],
      base: ['16px', '18px'],
      lg: ['18px', '20px'],
      xl: ['20px', '22px'],
      '2xl': ['22px', '24px'],
      '3xl': ['24px', '26px'],
      '4xl': ['26px', '28px'],
      '5xl': ['28px', '30px'],
    },
  },
  plugins: [],
}

