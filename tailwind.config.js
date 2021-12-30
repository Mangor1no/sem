module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,jsx,ts,tsx,vue}', './src/components/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"'],
        oswald: ['"Oswald"'],
      },
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      colors: {
        primary: '#A24936',
        disabled: '#B1B1B1',
        active: '#5E1100',
        textPrimary: '#2B2B35',
        bgPrimary: '#2B2B35',
      },
      fontSize: {
        xs: ['.75rem', { letterSpacing: '.03em', lineHeight: '1.125rem' }], // Caption 12px
        sm: ['.875rem', { letterSpacing: '.03em', lineHeight: '1.5rem' }], // Small text 14px
        base: ['1.125rem', { letterSpacing: '.03em', lineHeight: '1.688rem' }], // 16px
        lg: ['1.5rem', { letterSpacing: '.03em', lineHeight: '2.25rem' }], // Body 2 18px
        xl: ['2.25rem', { letterSpacing: '.03em', lineHeight: '3.375rem' }], // Body 1, Heading 6 21px
        '2xl': ['3rem', { letterSpacing: '.03em', lineHeight: '4.5rem' }], // Body 1, Heading 6 21px
      },
      fontWeight: {
        black: 700,
        bold: 600,
        semibold: 500,
        normal: 400,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
