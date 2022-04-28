const dayjs = require('dayjs')

const filterTimes = (val, format = 'YYYY-MM-DD') => {
  if (!isNull(val)) {
    val = parseInt(val) * 1000 // 时间戳为10位需 * 1000
    return dayjs(val).format(format)
  } else {
    return '--'
  }
}

// 判断时间是否为空
export const isNull = (date) => {
  if (!date) return true
  if (JSON.stringify(date) === '{}') return true
  if (JSON.stringify(date) === '[]') return true
}

export default (app) => {
  app.config.globalProperties.$filters = {
    filterTimes
  }
}
