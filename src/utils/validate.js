export function isEmail(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
    return reg.test(str)
}

export function isExist(str) {
    return str != '' && str != null && str != undefined
}