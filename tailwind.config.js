/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        rotateBottal: "bottal 6s  linear  1",
        rotateglass: "glass 6s  linear  infinite",
      },
      keyframes: {
        bottal: {
          "0%,": { transform: "rotate(-3deg)" },
          "25%": { transform: "rotate(30deg) " },
          "50%,": { transform: "rotate(45deg)" },
          "75%": { transform: "rotate(88deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        glass: {
          "0%,": { backgroundcolor: "yellow-500" },
          "25%,": { backgroundcolor: "red" },
          "75%,": { backgroundcolor: "red" },
          "100%,": { transform: "translateX(-55%)" },
        },
      },
    },
  },
  plugins: [],
};
