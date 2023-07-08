import request from '@/utils/request'

//登出
export function logout(){
    return request({
        url: '/logout',
        method: 'post'
    })
}

//获取账号信息
export function getUser(){
    return request({
        url: '/me',
        method: 'get'
    })
}