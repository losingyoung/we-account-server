const Router = require('koa-router')
const router = new Router()

router.post("/add_item", ctx => {
    ctx.body= {
        success: true
    }
})
module.exports = router