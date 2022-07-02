const { transparent } = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"century-gothic"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '2xl': '1440px',
      },
      maxWidth: {
        '7xl': '74rem'
      },
      minHeight: {
        '5': '5rem',
        '6': '6rem',
        '7': '7rem'
      },
      fontSize: {
        'xl': '1.4rem',
        '2xl': '1.6rem',
        '4xl': '2.5rem',
        '6xl': '4rem',
      },
      lineHeight: {
        loose: '1.9'
      },
      colors: {
        orange: {
          light: '#FFC230',
          DEFAULT: '#FDB813',
          dark: '#DEA315'
        },
        red: {
          light: '#EC0138',
          DEFAULT: '#D50032',
          dark: '#B9022D'
        },
        purple: {
          light: '#8E5AA9',
          DEFAULT: '#511C6C',
          dark: '#34084B'
        },
        gray: {
          light: '#acadae',
          DEFAULT: '#EFEFEF',
          dark: '#F1F1F1'
        },
        black: {
          light: '#262626',
          DEFAULT: '#1C1C20',
          dark: '#000000'
        },
        whiteTransparent: {
          100: 'rgba(255,255,255,0.1)',
          200: 'rgba(255,255,255,0.2)',
          300: 'rgba(255,255,255,0.3)'
        }
      },
      borderRadius: {
        DEFAULT: '1rem',
        'md': '2rem',
        'lg': '2.2rem',
      },
      boxShadow: {
        DEFAULT: '2px 2px 8px 0 rgb(0 0 0 / 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
