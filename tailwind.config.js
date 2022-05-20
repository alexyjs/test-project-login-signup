// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#ffffff',
        alabaster: '#F7F7F7',
        affair: '#5E3B76',
        premium: '#FFD747',
        bossanova: '#562E69',
        shark: '#212529',
        paleSky: '#6C757D',
        catskillWhite: '#EDF2F7',
        ghost: '#CED4DA',
        easternBlue: '#25A1AF',
        elm: '#1B818C',
        frenchLilac: '#E2D9F3',
      },
      boxShadow: {
        'header-box': '0px 2px 6px rgba(0, 0, 0, 0.08)',
        'inner-box': 'inset 0px 0px 18px -4px rgba(0, 0, 0, 0.15)',
        'auth-box': '0px 2px 12px rgba(0, 0, 0, 0.08)',
        'social-box':
          '0px 0px 1px rgba(12, 26, 75, 0.2), 0px 1px 3px rgba(50, 50, 71, 0.1)',
      },
      fontFamily: {
        lora: ['Lora', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
