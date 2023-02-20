module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1200px",

      "2xl": "1280px",
    },
    extend: {
      boxShadow: {
        "3xl": "0 4px 20px 2px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        "text-color": "#0a0a0a",
        "primary-color": "#fcb000",
        "secondary-color": "#74d14c",
        "primary-color-strong": "#f38a00",
        transparent: "transparent",
        "txt-light": "#505050",
        main: "#fff",
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        white: "#fff",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
