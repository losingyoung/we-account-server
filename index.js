const co = require('co')

function exeA(args) {
console.log('exeA')
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(args + '+args')},2000)
    })
}
function exeB(args) {
    console.log('exeB')
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(args + '+b')},1000)
    })
}
function exeC(args) {
    console.log('exeC')
    return Promise.resolve(args + '+c')
}

// co(function* (){
//     const args = 'initial'
//     console.log('start')
//     let a = yield exeA(args)
//     let b = yield exeB(a)
//     let c = yield exeC(b)
//     // let c = yield [exeA(args), exeB(args), exeC(args)]
//     console.log('end c:',c)
//     return c
// }).then((data)=>{
//     console.log('then', data)
// })


const Koa = require('koa')

const bodyParser = require('koa-bodyparser');
const app = new Koa()
const router =require('./routers')
const db =require('./db')
// router.get('', (ctx, next) => {
//     console.log(ctx)
//     ctx.body = 'Hello World!';
//     next()
// }, (ctx, next) => {
//   ctx.body += 'hh'
//   next()
// },
// (ctx, next) => {
// console.log('end')
// })
let connection;
db().then(con => {
    connection = con
})
let i =0
app.use(bodyParser())
app.use(async (ctx,next) => {
    console.log('第', i++ ,"次连接")
   ctx.db = connection
   await next()
//    ctx.db.
})

app.use(router.routes())
.use(router.allowedMethods());



app.listen(4000)
