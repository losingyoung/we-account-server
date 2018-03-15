const Router = require('koa-router')
const router = new Router()
// const Demo = require('../models/demo')
const db =require('../db')

router.post('/query', ctx => {

    ctx.body = {'signup':'query'}
})
router.get('/add',  async(ctx, next) => {
      let result = await ctx.db.execute(
            'INSERT INTO `demos`(`name`,`age`) VALUES (?, ?)',
            // 'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
            ['nammm', 52]
          );
          console.log(result)
        //  await next()
          ctx.body = {'signup':'add'}
         console.log('addd end')
     
})
router.post('/update', ctx => {
    ctx.body = {'signup':'update'}
})
router.post('/delete', ctx => {
    ctx.body = {'signup':'delete'}
})

module.exports = router
