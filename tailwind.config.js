/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#2563EB',
        accent: '#22C55E',
        background: '#F8FAFC',
        text: '#020617',
        ink: {
          DEFAULT: '#0f2438',
          soft: '#3b5168',
          muted: '#5b7086',
        },
        paper: {
          DEFAULT: '#fbfaf7',
          warm: '#f3f0e8',
        },
        line: '#e4e0d6',
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
        },
        chat: {
          bg: '#efe7dd',
          out: '#d9fdd3',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
