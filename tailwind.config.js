/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A374D', // Azul oscuro suave
        secondary: '#A4D0A4', // Verde menta
        background: '#F9F9F9', // Blanco cálido
        textPrimary: '#2C2C2C', // Gris oscuro
        textSecondary: '#6C757D', // Gris suave
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

