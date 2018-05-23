const Koa = require('koa')

const bodyParser = require('koa-bodyparser');
const app = new Koa()
const router =require('./routers')
const {query} =require('./db')
const initDBTables = require('./db/create-table')

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

initDBTables(function () {
    const len = arguments.length
    for (let i = 0; i < len; i++) {
        let tableName = arguments[i]
        if (arguments[i]) {
          console.warn(tableName + '表创建失败，手动执行sql语句')
        }
    }
    app.listen(4000)
})

