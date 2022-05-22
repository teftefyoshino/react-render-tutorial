module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard',
    "prettier",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  settings: {
    "react": {
      "version": "detect",
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  }
}
