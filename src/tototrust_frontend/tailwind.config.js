/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0FDF4', // Mint green lightest
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80', // Vibrant green
          500: '#22C55E', // Main playful green
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        secondary: {
          50: '#EEF6FF', // Light pastel blue
          100: '#DCEFFE',
          200: '#BEE3FE',
          300: '#90CDFE', // Cheerful blue
          400: '#63B4FD',
          500: '#3BA9FB',
          600: '#3182CE', // Brighter approachable blue
          700: '#256BA8',
          800: '#1C5280',
          900: '#164263',
        },
        accent: {
          50: '#FFF7EB', // Light peach
          100: '#FFECD1',
          200: '#FFDCAB',
          300: '#FFBB72',
          400: '#FFA940', // Vibrant orange
          500: '#FF850C', // Main energetic orange
          600: '#FB7200',
          700: '#E56700',
          800: '#C85A00',
          900: '#A94700',
        },
      },
    },
  },
  plugins: [],
}
