/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        display: "'Museo Slab', system-ui, sans-serif",
        body: "Montserrat, system-ui, sans-serif",
      },
      fontSize: {
        "3xl": [
          "2rem",
          {
            lineHeight: "2.375rem",
          },
        ],
      },
      colors: {
        primary: {
          600: "rgb(var(--primary600))",
          800: "rgb(var(--primary800))",
          900: "rgb(var(--primary900))",
        },
        secondary: {
          200: "rgb(var(--secondary200))",
          400: "rgb(var(--secondary400))",
          700: "rgb(var(--secondary700))",
        },
        accent: {
          blue: "rgb(var(--accent-blue))",
          red: "rgb(var(--accent-red))",
          green: "rgb(var(--accent-green))",
        },
      },
    },
  },
  plugins: [],
}
