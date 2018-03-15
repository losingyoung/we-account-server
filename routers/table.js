const Router = require('koa-router')
const router = new Router()
// const Demo = require('../models/demo')
const db =require('../db')

router.post('/query', ctx => {

    ctx.body = {'signup':'query'}
})
router.post('/add', function *(ctx)  {
    // var newData = await Demo.create([{
    //     name: 'Odie',
    //     age: 2
    // },{
    //     name: 'Odi2e',
    //     age: 3
    // }]);
    // console.log('created: ' + JSON.stringify(newData));
  console.log('add')
    /*
   let connection = await db() */
  let result = yield ctx.db.execute(
        'INSERT INTO `demos`(`name`,`age`) VALUES (?, ?)',
        // 'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
        ['nammm', 52]
      );
     console.log('addd end')
    ctx.body = {'signup':'add'}
})
router.post('/update', ctx => {
    ctx.body = {'signup':'update'}
})
router.post('/delete', ctx => {
    ctx.body = {'signup':'delete'}
})

module.exports = router
