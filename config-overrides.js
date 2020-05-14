// REFERENCE:
// https://github.com/arackaf/customize-cra/blob/HEAD/api.md#useeslintrcconfigfile

const { override, useBabelRc, useEslintRc, overrideDevServer, watchAll } = require('customize-cra');
const path = require('path');

module.exports = {
  webpack: override(
    // usual webpack plugin
    // disableEsLint()
    useBabelRc(path.resolve(__dirname, '.babelrc.js')),
    useEslintRc(path.resolve(__dirname, '.eslintrc.js'))
  ),
  devServer: overrideDevServer(
    // dev server plugin
    // disableEsLint(),
    watchAll()
  ),
};
