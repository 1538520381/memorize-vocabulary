import request from '@/utils/request'

//获取问题
export function getQuestions(hadStudy) {
    console.log(hadStudy)
    return request({
        url: '/study/learn',
        method: 'post',
        data: {
            "study": hadStudy
        }
    })
}


//完成作答
export function finishTest(newStudy) {
    return request({
        url: '/study/complete',
        method: 'post',
        data: {
            completeId: newStudy
        }
    })
}

export function saveNewStudy(newStudyId) {
    return request({
        url: '/study/complete',
        method: 'post',
        data: {
            completeId: newStudyId
        }
    })
}

export function saveWrongWords(wrongWordsId) {
    return request({
        url: '/study/false',
        method: 'post',
        data: {
            falseWord: wrongWordsId
        }
    })
}