module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  root: true,
  extends: '@react-native',
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'prettier/prettier': [
      'error',
      {bracketSameLine: false, arrowParens: 'always'},
    ],
    'arrow-parens': ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
