/*
 * At the time of written, some of the ESLint plugins aren't supporting ESLint v9 yet, which
 * resulted in this deprecated configuration file format is being used.
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
  },
};
