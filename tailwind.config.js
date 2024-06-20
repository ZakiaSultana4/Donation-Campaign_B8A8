/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "gray-200": "#E5E7EB",
      white: "#FFFFFF",
      black: "#000000",
      clothing: "#79C23F",
      health: "#0052FF",
      food: "#F87147",
      education: "#FF444A",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
