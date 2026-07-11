/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: '#E1E0CC',

        background: '#050505',
        surface: '#101010',
        card: '#181818',

        muted: '#929286',
        accent: '#C8FF6A',

        border: 'rgba(225, 224, 204, 0.12)',
        'border-strong': 'rgba(225, 224, 204, 0.24)',
      },

      fontFamily: {
        sans: [
          'Almarai',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],

        serif: ['"Instrument Serif"', 'serif'],
      },

      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.35)',
        glow: '0 0 40px rgba(200, 255, 106, 0.12)',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },

  plugins: [],
};