const genRandomCode = (count = 6, container = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' ) => {
    count = parseInt(count)
    if (Number.isNaN(count)) {
        count = 6
    }
     // container62 位
   let ret = ''
   for (let i = 0; i < count; i++) {
     let index = Math.floor(Math.random()*63)
     ret += container[index]
   }
   return ret
}
module.exports = {
    genRandomCode
}