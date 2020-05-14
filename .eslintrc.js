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
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: '0.53', // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { 'property': 'freeze', 'object': 'Object' },
      { 'property': 'myFavoriteWrapper' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { 'name': 'Link', 'linkAttribute': 'to' },
    ],
  },
  // globals: {
  //   __DEV__: true,
  //   fetch: true,
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly',
  // },
  rules: {
    // 'prettier/prettier': ['error'],
    // 'eslint-comments/no-unused-disable': 'error',
    // [1]   Line 1:1:   Resolve error: unable to load resolver "babel-module"   import/namespace
    // [1]   Line 1:1:   Resolve error: unable to load resolver "babel-module"   import/no-unresolved
    // [1]   Line 1:1:   Resolve error: unable to load resolver "babel-module"   import/named
    // [1]   Line 6:21:  Unable to resolve path to module './components/Testss'  import/no-unresolved
    // ...rules,
    ...require('./eslint-config-finografic').rules,
    'import/no-unresolved': 0,
  },
};
