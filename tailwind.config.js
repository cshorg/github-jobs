/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      light_gray: "#F6F7FB",
      gray: "#B9BDCF",
      blue: "#1E86FF",
      white: "#ffffff",
      purple: "#B9BDCF",
      dark_blue: "#334680"
    },
    fontFamily: {
      display: ["Poppins"]
    }
  },
  plugins: []
}
