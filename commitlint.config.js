module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'docs',
        'fix',
        'feat',
        'chore',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'header-max-length': [2, 'always', 100],
  },
};
