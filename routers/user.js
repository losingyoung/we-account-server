const Router = require('koa-router')
const router = new Router()

router.post('/signup', ctx => {
    ctx.body = {'signup':'signup'}
})

module.exports = router
