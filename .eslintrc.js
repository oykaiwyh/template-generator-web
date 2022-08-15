module.exports = {
  // 环境，这里可以设置环来做区别判断
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  // 使用的扩展库
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:@typescript-eslint/recommended', 'eslint:recommended'],
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析器用于解析代码
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  // 可以全局使用变量
  globals: {
    React: true
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './src']
      }
    }
  },
  rules: {
    // 允许在 .js 和 .jsx 文件中使用  jsx
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'jsx-quotes': 0,
    'react/jsx-one-expression-per-line': 0,

    indent: 0, // 用于 'plugin:@typescript-eslint/recommended' 后，书写变量 const var let ，eslint报错
    'comma-dangle': 'off', // 对象字面量项尾不能有逗号
    'import/extensions': 'off',
    '@typescript-eslint/no-var-requires': 'off', // commonjs require引入依赖报错
    'import/no-unresolved': [ // @ 导入模块问题
      2,
      {
        ignore: ['^@/'],
      },
    ],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }] // 定义统一的组件定义-箭头函数组件
  }
};
