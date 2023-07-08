import request from '@/utils/request'

//获取问题
export function getQuestions(hadStudy){
    return request({
        url: '/study',
        method: 'get',
        data:{
            userStudy: hadStudy
        }
    })
}


//完成作答
export function finishTest(newStudy){
    return request({
        url: '/complete',
        method: 'post',
        data: {
            completeId: newStudy
        }
    })
}