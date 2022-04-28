import request from './request'

export const getUser = (params) => {
  return request({
    url: '/users',
    method: 'GET',
    params
  })
}
