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