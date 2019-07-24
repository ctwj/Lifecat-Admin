import request from '@/utils/request'

// 获取user列表
export function getUserList() {
  return request({
    url: '/users',
    method: 'get'
  })
}

// 获取消费
export function getExpenseList() {
  return request({
    url: '/expense',
    method: 'get'
  })
}

// 获取体现
export function getImageList() {
  return request({
    url: '/images',
    method: 'get'
  })
}

// 获取dynamic列表
export function getDynamicList() {
  return request({
    url: '/records',
    method: 'get'
  })
}
