import request from '@/utils/request'

export function getScore(year, month, day) {
    return request({
        url: '/user/score?year=' + year + '&month=' + month + '&day=' + day,
        method: 'get',
    })
}