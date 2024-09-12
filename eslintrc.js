module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
    requireConfigFile: false,
    },
    plugins: ['@babel'],
    extends: [
    'eslint:recommended',
    'plugin:@babel/recommended',
    ],
};
