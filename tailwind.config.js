/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#7FDBFF', // celeste
        accent1: '#B19CD9', // lila
        accent2: '#FF9EB5', // rosa
      },
      fontFamily: {
        alta: ['Montserrat', 'sans-serif'],
        eyesome: ['Playfair Display', 'serif'],
        cursive: ['Dancing Script', 'cursive'],
        elegant: ['Great Vibes', 'cursive'],
        stylish: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};