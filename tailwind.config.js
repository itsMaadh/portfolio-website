module.exports = {
  purge: {
    content: ["./pages/*.tsx", "./components/elements/*.tsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
