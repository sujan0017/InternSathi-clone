/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17171f",
        secondary: "#0071cd",
        secondaryDark: "#D93D42",
        background: "#F1C40F",
        secondaryBg: "#faf9fb",
        fontColor: "#9ca3af",
      },

      animation: {
        twinkle: "twinkle 15s ease-in-out 1s infinite",
        "move-diagonal": "move-diagonal 3s linear infinite",
      },

      keyframes: {
        twinkle: {
          "0%": {
            opacity: "10",
            transform: "translateY(100vh) translateX(-50vw)",
          },
          "50%": { opacity: "0.2", },
          "100%": {
            transform: "translateY(-100vh) translateX(90vw)",
            opacity: "10",
          },
        },

        "move-diagonal": {
          "0%": { transform: "translateY(100vh) translateX(0)" },
          "100%": { transform: "translateY(-100vh) translateX(80vw)" },
        },
      },
    },
  },
  plugins: [],
};
