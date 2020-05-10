// REFERENCE:
// https://github.com/arackaf/customize-cra/blob/HEAD/api.md#useeslintrcconfigfile

const {
  // addDecoratorsLegacy,
  // disableEsLint,
  // useEslintRc,
  // addBundleVisualizer,
  // addWebpackAlias,
  // adjustWorkbox
  override,
  disableEsLint,
  useBabelRc,
  useEslintRc,
  overrideDevServer,
  watchAll,
} = require("customize-cra");

module.exports = {
  webpack: override(
    // usual webpack plugin
    disableEsLint()
    // useBabelRc(),
    // useEslintRc()
  ),
  devServer: overrideDevServer(
    // dev server plugin
    //disableEsLint(),
    watchAll()
  ),
};
