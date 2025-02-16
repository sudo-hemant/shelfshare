module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:prettier/recommended', // This enables Prettier integration
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'next/typescript',
    'standard',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Your custom ESLint rules go here
  },
};