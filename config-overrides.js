const path = require('path');
const {
  override, addWebpackAlias, fixBabelImports, addLessLoader, adjustStyleLoaders
} = require('customize-cra');

function pathResolve(pathUrl) {
  return path.join(__dirname, pathUrl);
}

const { antdTheme } = require('./package.json');
// const theme = {
//   '@primary-color': 'yellow'
// };

module.exports = override(
  // ... config
  addWebpackAlias({
    '@': pathResolve('./src')
  }),
  // antd css 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    lessOptions: {
      modifyVars: antdTheme, // 默认 #1890ff
      // modifyVars: { '@primary-color': '#1890ff' }, // 不要这样配置主题颜色
      javascriptEnabled: true
    }
  }),
  // post-css报错问题
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    // eslint-disable-next-line no-param-reassign
    postcss.options = { postcssOptions };
  })
);
