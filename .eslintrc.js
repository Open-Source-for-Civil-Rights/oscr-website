module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  extends: ['xo-space/esnext', 'xo-react/space', 'xo-typescript'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/explicit-function-return-type': 0,
    'capitalized-comments': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-tag-spacing': 0,
    'react/prop-types': 0,
    'no-warning-comments': 0,
    'complexity': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-unnecessary-condition': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    'react/no-danger': 0,
  },
};
