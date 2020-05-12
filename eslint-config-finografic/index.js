const rulesENV =
  process.env.NODE_ENV === 'production' ? require('./rules/production').rules : require('./rules/development').rules;
module.exports = {
  rules: {
    // ...require('./rules/basic').rules,
    ...require('./rules/import').rules,
    ...rulesENV,
  },
};
