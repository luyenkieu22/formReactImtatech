/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      // => @media (min-width: 350px) { ... }
      sm: "500px",
      // => @media (min-width: 500px) { ... }

      md: "640px",
      // => @media (min-width: 640pxpx) { ... }

      lg: "800px",
      // => @media (min-width: 800px) { ... }
      xl: "1180px",
      // => @media (min-width: 1180px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
