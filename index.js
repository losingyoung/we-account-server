const Koa = require('koa')

const bodyParser = require('koa-bodyparser');
const app = new Koa()
const router =require('./routers')
const {query} =require('./db')


let i =0
app.use(bodyParser())
app.use(async (ctx,next) => {
    console.log('第', i++ ,"次连接")
    if (!ctx.dbQuery) {
        ctx.dbQuery = query 
    }
   await next()
//    ctx.db.
})

app.use(router.routes())
.use(router.allowedMethods());



app.listen(4000)
