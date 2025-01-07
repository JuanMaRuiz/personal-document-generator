import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
];
