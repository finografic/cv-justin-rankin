// ESLint rules: IMPORT
module.exports = {
  rules: {
    'react/prop-types': [2, { skipUndeclared: true }],
    'react/sort-prop-types': [
      1,
      {
        callbacksLast: true,
        ignoreCase: false,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: false,
      },
    ],
  },
};
