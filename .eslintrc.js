module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    // commonjs: true,
    jest: true,
  },
  // extends: ['plugin:react/recommended', 'standard'],
  extends: ["plugin:react/recommended"],
  parser: 'babel-eslint',
  parserOptions: {
    // ecmaVersion: 6,
    ecmaVersion: 2018,
    sourceType: "module", // IMPORTANT !!
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks'
    'jsx-a11y'
    'import',
    'eslint-comments',
    'emotion',
    'css-modules',
    'prettier',
  ],
  // globals: {
  //   __DEV__: true,
  //   fetch: true,
  //   Atomics: "readonly",
  //   SharedArrayBuffer: "readonly",
  // },
  rules: {
    quotes: ["warn", "single", { avoidEscape: true }],
    "spaced-comment": 2,
    "no-unused-vars": 2,
  },
};
