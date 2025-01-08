/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        infiniteSlideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        infiniteSlideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'infinite-slide-left': 'infiniteSlideLeft 15s linear infinite',
        'infinite-slide-right': 'infiniteSlideRight 15s linear infinite',
      }
    },
  },
  plugins: [],
};