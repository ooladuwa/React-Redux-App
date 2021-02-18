module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   "hero-image": "url('./src/images/chucknorris2.jpg')",
      // }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
