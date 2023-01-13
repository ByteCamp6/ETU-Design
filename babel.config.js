module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-typescript"],
  overrides: [
    {
      test: /\.vue$/,
      plugins: ["@babel/transform-typescript"],
    },
  ],
  env: {
    utils: {
      plugins: [["babel-plugin-module-resolver", { root: "etu-design" }]],
    },
  },
};
