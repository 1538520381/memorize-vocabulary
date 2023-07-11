import request from '@/utils/request'

export function getBookById(hadStudy) {
    console.log(hadStudy)
    return request({
        url: '/book/book',
        method: 'post',
        data: {
            study: hadStudy
        }
    })
}