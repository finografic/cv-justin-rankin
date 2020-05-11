module.exports = {
  presets: [
    //'react-app', // NEEDED ??
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
    ['@babel/preset-react'],
  ],
  ////////////////////////////////////////////////////////
  plugins: [
    ///////////////////////
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
        root: ['.'],
        alias: {
          'config': './config',
          'lib': './lib',
          'data': './data',
          '__mocks__': './__mocks__',
        },
      },
    ],
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            'rootPathSuffix': './src/components',
            'rootPathPrefix': '~/',
          },
          {
            'rootPathSuffix': './src/utils',
            'rootPathPrefix': '!/',
          },
        ],
      },
    ],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-transform-arrow-functions'],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    ['@babel/plugin-proposal-export-default-from'],
    ['@babel/plugin-proposal-object-rest-spread'],
    //////////////////////
  ],
};
