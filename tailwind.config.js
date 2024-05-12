/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "RocknRoll": "RocknRoll One",
        "lato": "lato",
      },
      backgroundImage: {
        "main": "url('/images/bg2.jpg')",
      },
    },
    screens: {
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "0,625rem",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
