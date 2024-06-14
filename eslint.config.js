import eslintJS from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    eslintJS.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    {
        name: 'eslint-config-bright4lpha',
        rules: {
            'no-console': 'warn', // allow, warn, error
            'no-debugger': 'error',
        },
    },
    {
        ignores: ['**/node_modules/**', 'dist/**'],
    },
];
