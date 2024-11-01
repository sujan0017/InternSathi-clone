/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17171f",
        secondary: "#EE2f2f",
        secondaryDark: "#D93D42",
        background: "#F1C40F",
        secondaryBg: "#faf9fb",
        fontColor: "#9ca3af",
      },
    },
  },
  plugins: [],
};
