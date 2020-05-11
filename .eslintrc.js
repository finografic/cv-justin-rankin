const { rules } = require('./eslint-config-finografic');
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    // commonjs: true,
    jest: true,
  },
  extends: [
    // 'react-app', // for editor - REQUIRES INSTALLATION OF TYPESCRIPT
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:json/recommended',
    'plugin:i18n-json/recommended',
    // 'plugin:css-modules/recommended',
    'plugin:eslint-comments/recommended',
    // 'finografic', - INCLUDE WHEN CONFIG IS COMPLETE
  ],
  parser: 'babel-eslint',
  parserOptions: {
    // ecmaVersion: 6,
    // ecmaVersion: 2018,
    ecmaVersion: 2020,
    sourceType: 'module', // IMPORTANT !!
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'babel', // NEEDED ??
    'node',
    'jsx-a11y',
    'import',
    'eslint-comments',
    // 'emotion',
    // 'css-modules',
    // 'prettier',
  ],
  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    // DIFFERENCT FROM jsconfig.json SETTING ???
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'], // ALLOW OMMISION OF THESE EXTENSIONS :)
      },
      // 'babel-module': {},
    },
    react: {
      version: 'detect',
    },
  },
  // globals: {
  //   __DEV__: true,
  //   fetch: true,
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly',
  // },
  rules: {
    //'prettier/prettier': ['error'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eslint-comments/no-unused-disable': 'error',
    // [1]   Line 1:1:   Resolve error: unable to load resolver "babel-module"   import/namespace
    // [1]   Line 1:1:   Resolve error: unable to load resolver "babel-module"   import/no-unresolved
    // [1]   Line 1:1:   Resolve error: unable to load resolver "babel-module"   import/named
    // [1]   Line 6:21:  Unable to resolve path to module './components/Testss'  import/no-unresolved
    ...rules,
  },
};
