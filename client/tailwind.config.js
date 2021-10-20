module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Libre Baskerville"],
        heading: ["DM Serif Display"],
        ui: ["Work Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
