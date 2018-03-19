const Router = require('koa-router')
const router = new Router()
const user = require('./user')
const tableRoute = require('./table')
const group = require('./group')


router.use('/user', user.routes())
router.use('/table', tableRoute.routes())
router.use('/group', group.routes())

module.exports = router