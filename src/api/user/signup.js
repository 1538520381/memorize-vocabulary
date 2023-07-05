import request from '@/utils/request'

export function signup(user){
    return request({
        url: '/register',
        method: 'post',
        data: {
            loginForm: user
        }
    })
}