/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      spacing: {
        section: "50px",
        cardGap: "30px",
        horizontalSpacing: "20px",
      },
      colors: {
        primary: "#CE9560",
        secondary: "#926A59",
        tertiary: "#FFFAF6",
        primaryBackground: "#FAFAFA",
        heading1: "#444444",
        primaryHover: "#B98656",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        fadeOut: "fadeOut 0.5s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
