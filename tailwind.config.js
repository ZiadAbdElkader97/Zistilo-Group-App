/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    fontFamily: {
      Kanit: "Kanit, sans-serif",
      Caveat: "Caveat, cursive",
      Fontawesome: "FontAwesome, sans-serif",
    },
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      screens: {
        xxl: {
          min: "1400px",
        },
        xl: {
          min: "1200px",
        },
        lg: {
          min: "992px",
          max: "1199.98px",
        },
        md: {
          min: "768px",
          max: "991.98px",
        },
        sm: {
          max: "767.98px",
        },
        vsm: {
          max: "420px",
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          width: "100%",
          padding: "0 15px",
          "@screen sm": {
            maxWidth: "767px",
          },
          "@screen md": {
            maxWidth: "991px",
          },
          "@screen lg": {
            maxWidth: "1199px",
          },
          "@screen xl": {
            maxWidth: "1320px",
          },
        },
      });
    },
  ],
};
