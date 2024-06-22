/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#c49ff5',
        'custom-purple-dark': '#6d21f2',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-50px) rotate(-45deg)', opacity: '0.1' },
          '100%': { transform: 'translateX(0) rotate(-45deg)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.4s forwards',
      },
    },
  },
  plugins: [],
}