import request from '../utils/request.js'

export function getSysInfo() {
  return request({
    url: '/tags',
    method: 'get'
  })
}
