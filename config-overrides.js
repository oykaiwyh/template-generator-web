const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { override, addWebpackAlias, fixBabelImports } = require('customize-cra');

function pathResolve(pathUrl) {
  return path.join(__dirname, pathUrl);
}

module.exports = override(
  // ... config
  addWebpackAlias({
    '@': pathResolve('./src')
  }),
  // antd css 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
);
