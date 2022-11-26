/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        textPrimary: '#383853',
        textPrimaryLight: '#7b8191',
        textLight: '#a9abbd',
        white: '#fff',
        primary: '#38cab3',
        bodyWhite: '#f8fafa',
        bodyDark: '#383d52',
        card: '#fff',
        primaryDark: '#2a2e3f',
      },
    },
  },
  plugins: [],
};
