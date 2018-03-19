
const Router = require('koa-router')
const router = new Router()

router.post('/signup', ctx => {
    ctx.body = {
        'signup': 'signup'
    }
})

router.post('/get_user_info', ctx => {
    ctx.body = {
        userInfo: {
            wa_code: 777,
            name: 'losingyoung',
            gender: "0",
            avatar: ""
        }
    }
})
module.exports = router
