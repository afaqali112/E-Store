/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1e2832",
        "black-50": "rgba(30, 40, 50, 0.5)",
        dark: "#000",
        "dark-50": "rgba(0, 0, 0, 0.5)",
        white: "#fff",
        "black-75": "rgba(30, 40, 50, 0.75)",
        "gravy-fa6-navy": "#193154",
        primary: "#ff6f61",
        stroke: "#e3e3e3",
        "black-5": "rgba(30, 40, 50, 0.05)",
        "black-25": "rgba(30, 40, 50, 0.25)",
        gray: "#010204",
      },
      fontFamily: {
        "button-small": "'Open Sans'",
        "input-text": "Roboto",
        "roboto-condensed": "'Roboto Condensed'",
      },
    },
    
    screens: {
      xl:{
        max: "1440px"
        },
      lg: {
        max: "1200px",
      },
      md: {
        max: "768px",

      },
      sm: {
        max: "425px",
    },
  },
  corePlugins: {
    preflight: false,
  },
},
};
