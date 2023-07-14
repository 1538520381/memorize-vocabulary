import request from '@/utils/request'

//登出
export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}

//修改昵称
export function changeName(newName) {
    return request({
        url: '/user/change?userName=' + newName,
        method: 'post'
    })
}

export function changePassword(password, code) {
    return request({
        url: '',
        method: '',
        data: {
            password: password,
            code: code
        }
    })
}