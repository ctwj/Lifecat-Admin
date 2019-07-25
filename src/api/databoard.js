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
export function getWithdrawalList() {
    return request({
        url: '/withdrawal',
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