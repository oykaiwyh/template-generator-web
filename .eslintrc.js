module.exports = {
  // 环境，这里可以设置环来做区别判断
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  // 使用的扩展库
  extends: ['plugin:react/recommended', 'airbnb', 'eslint:recommended'],
  plugins: ['react'],
  parserOptions: {
    parser: 'babel-eslint', // 解析器用于解析代码
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 可以全局使用变量
  globals: {
    React: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './src'],
      },
    },
  },
  rules: {
    // 允许在 .js 和 .jsx 文件中使用  jsx
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'jsx-quotes': 0,
    'react/jsx-one-expression-per-line': 0,

  },
};
