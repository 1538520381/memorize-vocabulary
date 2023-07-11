const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, './src/icons'))
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
      .end()
  },
  devServer: {
    client: {
      overlay: false
    }
  }
})