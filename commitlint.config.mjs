/**
 * Commitlint — enforces **header shape** (type, optional scope, subject).
 *
 * - Rule severity is always a number: 0 = off, 1 = warning, 2 = error
 * - Commit scopes are optional
 *
 * @type {import('@commitlint/types').UserConfig}
 */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'deps', 'docs', 'feat', 'fix', 'refactor', 'revert', 'style', 'test'],
    ],
    'subject-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 120],
  },
};
