/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#53423e",
      lightBrown: "#a47f6f",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#c5630c",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#415057",
      lightGrey: "#978580",
      darkGrey: "#33353a",
      reallyDarkGrey: "#1a1F24",
      black2: "#060a0d",
    },
    extend: {
      backgroundImage: {
        bannerImg: "url('/backgroundmain.jpg')",
      },
      animation: {
        blob: "blob 4s infinite",
      },
      boxShadow: {
        cyanShadow: "0px0px 20px 0px rgba(94,206,220,0.5)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94,206,220,0.5)",
        orangeMediumShadow: "10px 10px 200px 150px rgba(240,169, 79, 0.5)",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "scale(0.5)",
          },

          "33%": {
            transform: "scale(0.8)",
          },

          "66%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0.5)",
          },
        },
      },
    },
    fontFamily: {
      body: ["Josefin Sans'"],
      special: ["Roboto"],
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
