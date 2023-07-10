import request from '@/utils/request'

export function signup(email,password,code){
    return request({
        url: '/user/register',
        method: 'post',
        data: {
          email: email,
          password: password,
          code: code
        }
    })
}