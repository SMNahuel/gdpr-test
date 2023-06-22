/** @type {import('tailwindcss').Config} */
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
    extend: {},
  },
  plugins: [],
};
