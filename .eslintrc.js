module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': 'airbnb-typescript',
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
    'project': './tsconfig.json',
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['off'],
    'max-len': ['error', {
      'code': 120
    }],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off'
  },
  "ignorePatterns": ["examples"],
};
