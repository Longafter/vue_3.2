const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  configureWebpack: config => {
    // 按需导入 element-plus
    config.plugins.push(AutoImport({
      resolvers: [ElementPlusResolver()]
    }))
    config.plugins.push(Components({
      resolvers: [ElementPlusResolver()]
    }))
  }
}
