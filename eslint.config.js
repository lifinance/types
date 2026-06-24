import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    ignores: [
      'src/_cjs/**',
      'src/_esm/**',
      'src/_types/**',
      '**/*.config.js',
      '**/*.config.ts',
      '**/*.test.js',
      '**/*.test.ts',
    ],
  },
  ...tseslint.configs['flat/recommended'],
  prettierConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'max-len': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      curly: 2,
    },
  },
]
