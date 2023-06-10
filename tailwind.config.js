/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class','.dark-theme'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ["Sora", "sans-serif"],
    },
    extend: {
      colors: {
        'lightDark': '#161616',
        'dark': '#131313',
      },
    },
  },
  plugins: [],
}
