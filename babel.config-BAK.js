module.exports = {
  presets: [
    'react-app', // NEEDED ??
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.0.0',
        targets: {
          esmodules: true,
          ie: 11,
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
          // node: 10,
          node: 'current',
        },
      },
    ],
    //'babel-preset-react-app',
    '@babel/preset-react',
    // "@emotion/babel-preset-css-prop",
  ],
  plugins: [
    // "@babel/plugin-transform-runtime",
    // "@babel/plugin-proposal-do-expressions"
    // "@babel/plugin-proposal-class-properties",
    // "@babel/plugin-proposal-do-expressions",
    // "@babel/plugin-proposal-export-default-from",
    // "@babel/plugin-proposal-object-rest-spread",
    // "@babel/plugin-proposal-optional-chaining",
    // "@babel/plugin-syntax-dynamic-import",
    // "babel-plugin-emotion",
    // "import-graphql"
  ],
  ignore: ['node_modules', 'build', 'dist'],
};
