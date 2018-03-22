const Router = require('koa-router')
const router = new Router()
const user = require('./user')
const tableRoute = require('./table')
const group = require('./group')
const cateIcons = require('./cate-icon')

router.use('/user', user.routes())
router.use('/table', tableRoute.routes())
router.use('/group', group.routes())
router.use('/cate_icon', cateIcons.routes())

module.exports = router