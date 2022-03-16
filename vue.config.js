const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/zhuhai-h5/'
    : '/',
  devServer: {
    proxy: {
      '/zhapi': {
        // target: 'http://42.193.152.189:8111',
        target: 'http://zh.dgzzkj.cn',
        // ws: true,
        // pathRewrite: {
        //   '^/zhapi': '', // rewrite path
        // },
        changeOrigin: true
      },
    }
  },

});
