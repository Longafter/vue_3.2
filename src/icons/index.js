import SvgIcon from '@/components/SvgICon'

const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach((item) => svgRequired(item))

export default (app) => {
  // 注册全局组件
  app.component('svg-icon', SvgIcon)
}
