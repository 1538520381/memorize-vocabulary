import request from '@/utils/request'

//获取词书列表
export function getBookList(page,pageNum,search){
    return request({
        url: '/list',
        method: 'get',
        param: {
            page: page,
            pageNum: pageNum,
            search: search
        }
    })
}

//选择词书
export function chooseBook(bookId){
    return request({
        url:'/book',
        method: 'put',
        params: {
            bookId: bookId
        }
    })
}