module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    // commonjs: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    //'plugin:prettier/recommended',
    //'prettier/babel',
    // 'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    // 'prettier'
  ],
  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    // 'import/resolver': {
    //   node: {
    //     moduleDirectory: ['node_modules', 'src'],
    //     extensions: ['.js', '.jsx'],
    //   },
    //   'babel-module': {},
    // },
    react: {
      version: 'detect',
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    //'prettier/prettier': 0,
    quotes: ['warn', 'single', { avoidEscape: true }],
    'spaced-comment': 2,
    'no-unused-vars': 2,
  },
};
