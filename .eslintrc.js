module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'import/extensions': ['off', 'always', {
            js: 'never',
            vue: 'never',
        }],
        'max-len': 0,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
