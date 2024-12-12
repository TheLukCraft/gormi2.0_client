/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5AAF47',
        secondary: '#3F4A3C',
        neutral: '#A3AF9E',
        accent: '#00B4ED',
        deepAccent: '#007EB5',
        success: '#A3D977',
        error: '#E63946',
        warning: '#F4A261',
        cta: '#46993A',
        bgMain: '#F9FAFB',
        bgSection: '#EAEDED',
        textPrimary: '#1A1A1A',
        textSecondary: '#FAFAFA',
        border: '#D1D5DB',
        shadow: '#E5E7EB',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
