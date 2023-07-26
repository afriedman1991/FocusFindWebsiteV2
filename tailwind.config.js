/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '20': '5rem',
      },
      height: {
        'screen-minus-navbar': 'calc(100vh - 64px)',
      },
      textShadow: {
        'default': '0 2px 5px rgba(1, 1, 1, 1)',
        'lg': '0 2px 10px rgba(1, 1, 1, 1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwindcss-line-clamp')
  ],
}
