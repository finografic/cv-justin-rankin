module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:json/recommended',
    'plugin:i18n-json/recommended',
    'plugin:eslint-comments/recommended',
    // 'finografic', - INCLUDE WHEN CONFIG IS COMPLETE
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'babel',
    'node',
    'jsx-a11y',
    'import',
    'eslint-comments',
    // 'emotion',
    // 'css-modules',
    // 'prettier',
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'], // ALLOW OMMISION OF THESE EXTENSIONS :)
      },
    },
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { 'property': 'freeze', 'object': 'Object' },
      { 'property': 'myFavoriteWrapper' },
    ],
    linkComponents: [
      'Hyperlink',
      { 'name': 'Link', 'linkAttribute': 'to' },
    ],
  },
  rules: {
    // ...rules,
    ...require('./eslint-config-finografic').rules,
    'import/no-unresolved': 0,
    'react/jsx-uses-react': 0, // NEW! jsx runtime transform included in REACT ^16.14.0
    'react/react-in-jsx-scope': 0, // NEW! jsx runtime transform included in REACT ^16.14.0
  },
};
