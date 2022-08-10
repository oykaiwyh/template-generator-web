// eslint-disable-next-line import/no-extraneous-dependencies
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://xxxxx',
      changeOrigin: true, // needed for virtual hosted sites
      // ws: true, // proxy websocketsh
      pathRewrite: {
        '^/api': ''
      }
    })
  );
  app.use(
    '/xxx',
    createProxyMiddleware({
      target: 'https://xxxxx',
      changeOrigin: true, // needed for virtual hosted sites
      pathRewrite: {
        '^/xxx/': ''
      }
    })
  );
};
