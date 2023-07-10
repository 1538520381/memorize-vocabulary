import request from '@/utils/request'

//发送验证码
export function sendCode(email) {
    console.log(email)
    return request({
        url: '/user/code?email='+email,
        method: 'post'
    })
}

//获取账号信息
export function getUser(){
    return request({
        url: '/user/me',
        method: 'get'
    })
}