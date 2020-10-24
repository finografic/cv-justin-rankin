module.exports = {
  // ================================================ //
  presets: [
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
          node: 'current',
        },
      },
    ],
    ['@babel/preset-react'],
    [
      '@emotion/babel-preset-css-prop',
      {
        autoLabel: true,
        labelFormat: '[local]',
      },
    ],
  ],
  // ================================================ //
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
        version: '7.0.0-beta.0',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'scss': './src/styles/scss',
          'assets': './src/assets',
          '_config': './src/_config',
          'config': './src/config',
          'lib': './src/lib',
          'store': './src/store',
          'utils': './src/utils',
          'components': './src/components',
          'containers': './src/containers',
        },
      },
    ],
    [
      'react-intl',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        extractFromFormatMessageCall: true,
        extractSourceLocation: true,
        removeDefaultMessage: true,
        ast: true,
      },
    ],
    ['styled-components'],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
  ],
};
