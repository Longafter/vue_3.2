import request from './request'

// 获取用户列表
export const getUser = (params) => {
  return request({
    url: '/users',
    method: 'GET',
    params
  })
}

// 修改用户状态
export const changeUserState = (uid, type) => {
  return request({
    url: `users/${uid}/state/${type}`,
    method: 'PUT'
  })
}
