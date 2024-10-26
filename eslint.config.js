import tsParser from '@typescript-eslint/parser';
import tsEslintRecommended from '@typescript-eslint/eslint-plugin';
import importOrder from 'eslint-plugin-import';
import jsxAlly from 'eslint-plugin-jsx-a11y';
import ReactHooks from 'eslint-plugin-react-hooks';
import preact from 'eslint-plugin-preact';
import unUsedImports from 'eslint-plugin-unused-imports';


export default [
  {
    files: ['src/**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      preact: {
        version: 'detect',
      },
    },
    plugins: {
      '@typescript-eslint': tsEslintRecommended,
      import: importOrder,
      'jsx-a11y': jsxAlly,
      'react-hooks': ReactHooks,
      preact: preact,
      'unused-imports': unUsedImports,
    },
    rules: {
      'no-unused-vars': 'off', // Disable base rule for TypeScript
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external', 'internal']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'jsx-a11y/no-noninteractive-element-to-interactive-role': [
        'warn',
        { tr: ['none', 'presentation'] },
      ],
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
      'prefer-promise-reject-errors': 'off',
      quotes: ['warn', 'single', { avoidEscape: true }],
    },
    ignorePatterns: ['node_modules/', 'dist/', 'build/', 'logs/'],
    includeIgnoreFile: true,
  },
];
