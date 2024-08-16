/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "white",
        light: "black",
        mainD: "#5EC3BF",
        mainL: "#004F3A",
        bgcLight: "#F1EFEF",
        bgcDark: "#F1EFEF",
      },
      fontSize: {
        parrafo: "1.2rem",
        subtitulo: "1.5rem",
        semititulo: "2.2rem",
        titulo: "3rem",
      },
      backgroundImage: {
        'dark': "url('/src/utils/image/fondo-dark.jpg')",
        'light': "url('/src/utils/image/fondo-light.jpg')",
      },
      boxShadow: {
        'dark': '20px 20px 50px rgba(0, 0, 0, 0.1)',
        'light': '20px 20px 100px 15px rgba(255, 255, 255, 0.3)',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

