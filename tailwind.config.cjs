/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
			colors: {
				primary: "#9865FF",
				mute: "#6E6FA6",
				light: "#EEEEFE",
				red: "#F85C67",
				green: "#02D0C8",
				gold: "#F3C062",
			},
    },
  },
  plugins: [],
};
