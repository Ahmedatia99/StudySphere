/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        morning: "#FF9500",
        lighting: "#E4E4E7",
        darking: "#191919",
        litewhite: "#F7F7F8",
        liteorange: "#FFF4E5",
        textcook: "#262626",
        spantext: "#4C4C4D",
        tasting: "#F1F1F3",
        stroke: "#F1F1F3",
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        laptop: "1025px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1279px",
      },
    },
  },
  plugins: [],
};
