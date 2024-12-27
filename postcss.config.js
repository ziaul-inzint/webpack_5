module.exports = {
  plugins: {
    autoprefixer: require("autoprefixer"),
    cssnano: require("cssnano"),
    "postcss-pxtorem": require("postcss-pxtorem")({
      propList: ["*"],
    }),
  },
};
