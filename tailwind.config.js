module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      backgroundImage: () => ({
        banner: "url('../public/images/pexels-photo-2058911.334083fe1d2b825ddb72.jpeg')",
      }),
      colors: () => ({
        "transparent-purple-1": "rgb(58, 10, 156, 0.6)",
        "transparent-purple-2": "rgb(58, 10, 156, 0.75)",
      }),
    },
  },
  variants: {},
  plugins: [],
}
