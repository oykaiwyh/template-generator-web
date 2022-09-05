module.exports = {
  // 环境，这里可以设置环来做区别判断
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  // 使用的扩展库
  extends: ['plugin:react/recommended', 'airbnb', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
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
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }], // 定义统一的组件定义-箭头函数组件
    'no-console': [2, { allow: ['warn', 'error', 'log'] }], // 定义console输出的形式
    'max-len': ['error', 120, 2], // 单行最多120
    'object-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    'default-param-last': 'off', // 关闭函数参数有默认值时，参数需要放最后一个
    'no-shadow': 'off', // ts 定义enum错误
    '@typescript-eslint/no-explicit-any': 'off', // 关闭ts any类型警告
    'react/jsx-props-no-spreading': 'off', // 禁用 {...props} 扩展属性
    'react-hooks/exhaustive-deps': 'warn', // 配置 hook 依赖数组相关

  }
};
