/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-success': '#198754',
        'text-light': '#ffffff',
        'text-dark': '#212529',
        'bg-light': '#ffffff',
        'bg-dark': '#1a1a1a',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
    },
  },
  plugins: [],
}
