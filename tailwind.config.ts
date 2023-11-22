import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--montserrat)"],
      },
      colors: {
        primary: "#FF8A00",
        secondary: "#03070d",
      },
    },

    animation: {
      wheel: "wheel 2.5s ease-in-out infinite",

      blink: "blink 1s ease-in-out infinite",
    },

    keyframes: {
      blink: {
        "0%": {
          "border-right": "5px solid primary",
        },
        "50%": {
          "border-right": "5px solid transparent",
        },
        "100%": {
          "border-right": "5px solid primary",
        },
      },

      wheel: {
        "0%": {
          opacity: "1",
          top: "7px",
        },

        "20%": {
          opacity: "1",
          top: "7px",
        },

        "85%": {
          opacity: "0",
          top: "25px",
        },

        "86%": {
          opacity: "0",
          top: "7px",
        },

        "100%": {
          opacity: "1",
          top: "7px",
        },
      },
    },

    screens: {
      xs: "320px",
      sm: "550px",
      md: "768px",
      ml: "900px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1440px",
      "3xl": "1919px",
    },
  },
};
export default config;
