import request from '@/utils/request'

//登录
export function login(email, password,code) {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            email: email,
            password: password,
            code: code
        }
    })
}