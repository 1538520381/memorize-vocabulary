import request from '@/utils/request'

//发送验证码
export function sendCode(email) {
    return request({
        url: '/code',
        method: 'post',
        params: {
            email: email
        }
    })
}

//获取账号信息
export function getUser(){
    return request({
        url: '/me',
        method: 'get'
    })
}