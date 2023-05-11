/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],

  theme: {
    extend: {
      colors: {
          'blue-linktic': '#00A0FF',
    'blue-intense': '#006FB0',
    'gray-texts': '#505050',
    'gray-inputs': '#969EAF',
    'redtrigger': '#FFDFDF',
    'redbordertrigger': '#EA0000',
    'gray-sky': '#EAECF0',
    'blue-fondo': '#F2FDF1'
      }
    }
  },
  plugins: [],
}

