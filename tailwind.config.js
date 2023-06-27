/** @type {import('tailwindcss').Config} **/
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontFamily: {
    Roboto: ["Roboto", "sans-serif"],
    Arvo: ["Arvo", "serif"],
  },
  theme: {
    colors: {
      blue: '#6074cb',
      lightBlue: '#6c86ff',
      darkBlue: '#4054ad',
      yellow: '#f2b434',
      white: colors.white
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      body1: '19px',  
      body2: '16px',
      'h2': ['3.75rem',{
        fontWeight: 'bold',
        lineHeight: 0.95,
      }],
      'h5':[
        
      ]
    }
  },
  extend: {
  },

  plugins: [],
};
