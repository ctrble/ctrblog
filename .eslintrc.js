module.exports = {
  env: {
    // Ensure we have access to Promise, Map, etc.
    es6: true,

    // The following is set by next/core-web-vitals:
    // - browser: true,
    // - node: true,
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-props-no-spreading': 'warn',
  },
};
