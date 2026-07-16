import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],

    plugins: {
      js,
      prettier,
    },

    extends: ['js/recommended'],

    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      'prettier/prettier': 'error',
      semi: ['warn', 'always'],
    },
  },

  tseslint.configs.recommended,
]);
