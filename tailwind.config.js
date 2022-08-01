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
        'xsm': '480px',
        '2xl': '1440px',
      },
      maxWidth: {
        '7xl': '74rem'
      },
      minHeight: {
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '7': '7rem'
      },
      gridTemplateColumns: {
        'footerNav': '12rem 7rem 6rem',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      fontSize: {
        'none': ['0', { lineHeight: '0' }], /* 0px/0px */
        'xxs': ['0.63rem', { lineHeight: '2' }], /* 10px/24px */
        'xs': ['0.75rem', { lineHeight: '2' }], /* 12px/24px */
        'sm': ['0.875rem', { lineHeight: '1.85' }], /* 14px/26px */
        'base': ['1rem', { lineHeight: '1.875' }], /* 16px/30px */
        'lg': ['1.125rem', { lineHeight: '1.66' }], /* 18px/30px */
        '2lg': ['1.25rem', { lineHeight: '1.5' }], /* 20px/30px */
        'xl': ['1.38rem', { lineHeight: '1.45' }], /* 22px/32px */
        '1xl': ['1.5rem', { lineHeight: '1.58' }], /* 24px/38px */
        '2xl': ['1.62rem', { lineHeight: '1.38' }], /* 26px/36px */
        '3xl': ['1.875rem', { lineHeight: '1.333' }], /* 30px/40px */
        '4xl': ['2.2rem', { lineHeight: '1.43' }], /* 35px/50px */
        '5xl': ['2.5rem', { lineHeight: '1.25' }], /* 40px/50px */
        '6xl': ['3.125rem', { lineHeight: '1.2' }], /* 50px/60px */
        '7xl': ['4.06rem', { lineHeight: '1.154' }], /* 65px/75px */
      },
      lineHeight: {
        lg: '1.9'
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
          medium: '#3D0E55',
          dark: '#34084B',
        },
        gray: {
          light: '#acadae',
          DEFAULT: '#EFEFEF',
          dark: '#F1F1F1',
          darker: '#B4B4B5'
        },
        black: {
          light: '#262626',
          DEFAULT: '#1C1C20',
          dark: '#000000'
        }
      },
      borderRadius: {
        DEFAULT: '1rem',
        'sm': '1.75rem', /* 28px */
        'md': '2rem', /* 32px */
        'lg': '2.2rem', /* 35px */
      },
      boxShadow: {
        DEFAULT: '2px 2px 8px 0 rgb(0 0 0 / 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      ringWidth: {
        DEFAULT: '2px',
      },
      ringColor: {
        DEFAULT: '#FDB813',
      },
      transitionDuration: {
        DEFAULT: '300ms',
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
