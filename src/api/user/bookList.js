import request from '@/utils/request'

//获取词书列表
export function getBookList(page,pageNum,search){
    return request({
        url: '/book/list?page='+page+'&pageNum='+pageNum+'&search='+search,
        method: 'get'
    })
}

//选择词书
export function chooseBook(bookId){
    return request({
        url:'/study/book?bookId='+bookId,
        method: 'put'
    })
}