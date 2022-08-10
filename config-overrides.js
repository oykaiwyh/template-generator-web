const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { override, addWebpackAlias } = require('customize-cra');

function pathResolve(pathUrl) {
  return path.join(__dirname, pathUrl);
}

module.exports = override(
  // ... config
  addWebpackAlias({
    '@': pathResolve('./src')
  })
);
