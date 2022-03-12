const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/dev-api': {
        target: 'http://42.193.152.189:8111',
        // ws: true,
        pathRewrite: {
          '^/dev-api': '', // rewrite path
        },
        changeOrigin: true
      },
    }
  },
});
