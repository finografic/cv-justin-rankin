module.exports = {
  parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   ecmaVersion: 2018,
  //   sourceType: 'module',
  // },
  'extends': [
    'react-app',
    // 'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:css-modules/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
    'prettier/babel',
    'prettier/react',
  ],
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
  // env: {
  //   browser: true,
  //   commonjs: true,
  //   es6: true,
  //   node: true,
  //   jest: true,
  // },
  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'],
      },
      'babel-module': {},
    },
    react: {
      'version': 'detect',
    },
  },
  globals: {
    __DEV__: true,
    fetch: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    "spaced-comment": 0,
    "no-unused-vars": 2
  },
};
