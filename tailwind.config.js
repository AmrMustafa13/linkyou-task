/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#273D5D",
        secondary: "#D98F4E",
        "primary-text": "#3D3D3D",
        "secondary-text": "#666666",
      },
      container: {
        padding: "2rem",
        center: true,
      },
    },
  },
  plugins: [],
};
