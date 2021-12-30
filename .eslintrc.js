const prettier = require('./.prettierrc.js');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'babel-module': {},
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  plugins: ['react', 'prettier', '@babel'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 'off',
    'prettier/prettier': ['error', prettier],
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.json'],
      },
    ],
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'react/prefer-stateless-function': ['off', { ignorePureComponents: true }],
    'react/button-has-type': 'warn',
    'no-irregular-whitespace': 'error',
    'no-tabs': 'error',
    'max-lines': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-array-index-key': 'warn',
  },
};
