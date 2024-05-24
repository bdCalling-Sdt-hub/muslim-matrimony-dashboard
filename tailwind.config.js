/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue500: "#0071E3",
        primary: "#0071E3",
        blue300: "#54A0EC",
        black500: "#1D1D1F",
        black300: "#686869 ",
        siteColor: "#E33183",
      },
    },
  },
  plugins: [],
};
