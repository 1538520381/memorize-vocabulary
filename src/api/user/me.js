import request from '@/utils/request'

//登出
export function logout(){
    return request({
        url: '/user/logout',
        method: 'post'
    })
}