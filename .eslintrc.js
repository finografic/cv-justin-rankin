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
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // 'plugin:css-modules/recommended',
    // 'plugin:eslint-comments/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier/babel',
    // 'prettier/react',
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
    // 'jsx-a11y'
    // 'import',
    // 'eslint-comments',
    // 'emotion',
    // 'css-modules',
    // 'prettier',
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
    __DEV__: true,
    fetch: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    //'prettier/prettier': ['error'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'spaced-comment': 0,
    'no-unused-vars': 2,
  },
};
