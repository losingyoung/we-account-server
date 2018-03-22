const Router = require('koa-router')
const router = new Router()
// const Demo = require('../models/demo')
// const db = require('../db')
const FIELDS = ['name', 'age']
const TABLENAME = 'demos'
router.post('/query',async ctx => {
    let result = await ctx
    .db
    .execute('SELECT * FROM demos ORDER BY id');
    let lastId = await ctx
    .db
    .execute('SELECT MAX(id) AS max_id FROM demos');
    let nextId = lastId[0][0].max_id + 1
    ctx.body = {
        items:result[0],
        nextId
    }
})
router.post('/add', async(ctx, next) => {
    console.log(ctx.request)
    let data = ctx.request.body
    let len = data.length
    if (len === 0) {
        ctx.body = {
            succuess: true
        }
        return
    }
    let sqlValues = ''
    let sqlField = FIELDS.reduce((sum, cur) => {
        return sum + '`'+cur+'`,'
    }, '')
    sqlField = sqlField.substring(0, sqlField.length - 1)
    while (len-- > 0) {
        sqlValues += '(?, ?),'
    }
    sqlValues = sqlValues.substring(0, sqlValues.length - 1)
    
    let sqlData = []
    data.forEach(obj => {
        FIELDS.forEach(field => {
            sqlData.push(obj[field])
        });
    });
    let result = await ctx
        .db
        .execute('INSERT INTO `'+ TABLENAME +'`('+ sqlField +')VALUES' + sqlValues,
        // 'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
        sqlData);
    console.log(result)
    ctx.body = {
        succuess: true
    }
    console.log('addd end')

})
router.post('/update', async ctx => {
    let data = ctx.request.body
    let len = data.length
    let fields =['id',...FIELDS]
    if (len === 0) {
        ctx.body = {
            succuess: true
        }
        return
    }


    let sqlValues = ''
    let sqlField = fields.reduce((sum, cur) => {
        return sum + '`'+cur+'`,'
    }, '')
    let sqlKeysUpdate = FIELDS.reduce((sum, cur) => {
        return sum + cur+'=VALUES(' + cur + '),'
    }, '')
    sqlField = sqlField.substring(0, sqlField.length - 1)
    sqlKeysUpdate= sqlKeysUpdate.substring(0, sqlKeysUpdate.length - 1)
    while (len-- > 0) {
        sqlValues += '(?, ?, ?),'
    }
    sqlValues = sqlValues.substring(0, sqlValues.length - 1)
    
    let sqlData = []
    data.forEach(obj => {
        fields.forEach(field => {
            sqlData.push(obj[field])
        });
    });


    let result = await ctx
    .db
    .execute('INSERT INTO '+ TABLENAME +'('+ sqlField +') VALUES' + sqlValues + 'on duplicate key update ' + sqlKeysUpdate ,
    // 'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    sqlData);
   // insert into test_tbl (id,dr) values  (1,'2'),(2,'3'),...(x,'y') on duplicate key update name=values(name), age=values(age);
    ctx.body = {
        succuess: true
    }
})
router.post('/delete',async ctx => {
    let data = ctx.request.body
    let len = data.length
    if (len === 0) {
        ctx.body = {
            succuess: true
        }
        return
    }
    let sqlData = data.reduce((sum, cur) => {
      return sum + cur.id + ','
    }, '')
    sqlData = sqlData.substring(0, sqlData.length - 1)
    let result = await ctx
    .db
    .execute('DELETE FROM ' + TABLENAME +' WHERE id IN (' + sqlData +');')
    ctx.body = {
        'success': true
    }
})

module.exports = router
