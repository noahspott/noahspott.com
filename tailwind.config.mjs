/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-fast": "floatFast 5s ease-in-out infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      fontFamily: {
        serif: ["Source-Serif-Pro"],
      },
      screens: {
        xs: "400px",
      },
      colors: {
        primary: {
          50: "#E6EAEF",
          100: "#CCD5E0",
          200: "#9AACC1",
          300: "#6782A1",
          400: "#355982",
          500: "#022F63",
          600: "#02264F",
          700: "#011C3B",
          800: "#011328",
          900: "#000914",
        },
        saturated: {
          500: "#056CE3",
        },
        accent: {
          500: "#C52906",
        },
        dark: {
          1: "#000000",
          2: "#1A1A1A",
          3: "#4D4D4D",
        },
        success: {
          500: "#17A702",
        },
      },
    },
  },
  plugins: [],
};
