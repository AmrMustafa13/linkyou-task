/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "360px",
        // => @media (min-width: 360px) { ... }
        xs: "460px",
        // => @media (min-width: 440px) { ... }
        sm: "576px",
        // => @media (min-width: 576px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        ml: "900px",
        // => @media (min-width: 900px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1200px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1600px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1920px",
        // => @media (min-width: 1920px) { ... }
        "4xl": "2560px",
        // => @media (min-width: 2560px) { ... }
      },
      colors: {
        primary: "#273D5D",
        secondary: "#D98F4E",
        "primary-text": "#3D3D3D",
        "secondary-text": "#666666",
      },
      container: {
        padding: "1rem",
        center: true,
      },
    },
  },
  plugins: [],
};
