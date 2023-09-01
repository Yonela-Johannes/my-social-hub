/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', "sans-serif"],
      },
      colors: {
        text: '#fff',
        primary: '#3d3d3d',
        secondary: '#5A2E98',
        bg_cl: '#181818',
        bg_alt: '#212121',
        bg_light: '#3d3d3d',
        lighter: '#7e7e80',
        hover: '#007749',
        facebook: '#4267B2',
        google: '#f03939',
        gold: "#FFB612",
        green: "#007749",
        red: "#DE3831",
        blue: "#002395",
        black: "#000000",
        white: "#FFFFFF",
        title: '#404145'
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
  },
};
