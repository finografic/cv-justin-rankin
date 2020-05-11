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
  ],
  parser: 'babel-eslint',
  parserOptions: {
    // ecmaVersion: 6,
    ecmaVersion: 2018,
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
        extensions: ['.js', '.jsx'],
      },
      'babel-module': {},
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
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
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'spaced-comment': 0,
    'no-unused-vars': 2,
    'eslint-comments/no-unused-disable': 'error',
  },
};
