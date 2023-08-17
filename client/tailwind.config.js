/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "logo-text-green": "#00FFF0",
        "logo-img-yellow": "#74FF00",
      },
    },
  },
  plugins: [require("daisyui")],
};
