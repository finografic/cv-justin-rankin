const { override, useBabelRc, useEslintRc, overrideDevServer, watchAll } = require('customize-cra');
const path = require('path');

/* eslint-disable react-hooks/rules-of-hooks */
module.exports = {
  webpack: override(
    useBabelRc(path.resolve(__dirname, 'babel.config.js')),
    useEslintRc(path.resolve(__dirname, '.eslintrc.js')),
  ),
  devServer: overrideDevServer(watchAll()),
};
/* eslint-enable react-hooks/rules-of-hooks */
