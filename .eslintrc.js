module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  root: true,
  extends: [
    '@react-native', // Keep your existing React Native configuration [[1]]
    'eslint:recommended', // Add recommended ESLint rules [[2]]
    'plugin:prettier/recommended', // Ensure Prettier integration [[10]]
  ],
  plugins: ['simple-import-sort'], // Add the import sorting plugin [[5]]
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
    'simple-import-sort/imports': 'error', // Enable import sorting [[5]]
    'simple-import-sort/exports': 'error', // Enable export sorting [[5]]
  },
};
