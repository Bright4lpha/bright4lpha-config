import js from '@eslint/js';
export default [
    js.configs.recommended,
    {
        name: 'eslint-config-bright4lpha',
        rules: {
            'no-console': 'warn', // allow, warn, error
        },
    },
    {
        ignores: ['**/node_modules/**', 'dist/**'],
    },
];
