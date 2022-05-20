module.exports = {
  content: [
    '../../packages/design-system/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.html', './src/**/*.{ts,tsx,js}'
  ],
  mode: 'jit',
  darkMode: false,
  theme: {
    fontSize: {
      s: '14px',
      m: '16px',
      l: '18px',
      xl: '24px',
      xxl: '48px',
    },
    extend: {
      screens: {
        lm: {max: '900px'},
      },
      fontFamily: {
        sans: "'Roboto', sans-serif",
      },
      colors: {
        'almost-transparent': 'rgba(255, 255, 255, 0.001)',
        white: '#ffffff',
        black: '#000000',
        'bg-color': '#181818',
        'gray-light': '#fafafa',
        'gray-medium': '#999999',
        'gray-dark': '#626262',
        'spotify-color': '#1DB954',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      pointerEvents: ['disabled'],
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [],
}
