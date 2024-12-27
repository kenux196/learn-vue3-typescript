import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class', // or 'media' or 'class'
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [daisyui],
  // daisyui: {
  //   themes: ['light', 'dark', 'cupcake'],
  // },
  // daisyui: {
  //   themes: ['light', 'dark'],
  // },
  daisyui: {
    themes: false,
  },
  darkMode: ['selector', '[data-theme="dark"]'],
};
