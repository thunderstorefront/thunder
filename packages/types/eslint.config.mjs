import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ['node_modules', 'dist'],
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error'
    }
  }
);