const {colors} = require('./src/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
    fontWeight: {
      bold: 700,
      medium: 500,
    },
    fontSize: {
      base: [
        '14px',
        {
          lineHeight: '16px',
          letterSpacing: '0%',
          verticalAlign: 'middle',
        },
      ],
      medium: [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '0%',
          verticalAlign: 'middle',
        },
      ],
    },
    boxShadow: {
      custom: '0px 0px 0px 0px #00000040',
    },
    borderColor: {
      custom: colors.primary,
      textPrimary: colors.textPrimary,
    },
    borderWidth: {
      custom: '2px',
      textPrimary: '1px',
    },
  },
  plugins: [],
  presets: [require('nativewind/preset')],
};
