const Router = require('koa-router')
const router = new Router()
const user = require('./user')
const tableRoute = require('./table')
const group = require('./group')
const cateIcons = require('./cate-icon')
const account = require('./account')
const notification = require('./notification')

// router.use('/', async (ctx, next) => {
//     console.log('before all')
//     await next()
// })
router.use('/user', async (ctx, next) => {
    // console.log('before user')
    await next()
}, user.routes())
router.use('/table', tableRoute.routes())
router.use('/group', group.routes())
router.use('/cate_icon', cateIcons.routes())
router.use('/account', account.routes())
router.use('/notification', notification.routes())
router.use('/', async (ctx, next) => {
    let success = ctx.body.data ? true : false
    let errorMsg = ctx.body.errorMsg ? ctx.body.errorMsg : '服务器错误'
    if (success) {
        errorMsg = null
    }
    ctx.body = Object.assign({}, ctx.body, {
        success,
        errorMsg
    })
    await next()
})

module.exports = router