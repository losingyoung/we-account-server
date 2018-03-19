
const Router = require('koa-router')
const router = new Router()

router.post('/get_groups_by_wa_code', ctx => {
    ctx.body = {
        groupInfos: [{
            id: 222,
            name: 'group1',
            owner: 777,
            members: [{
                wa_code: 333,
                name: 'member1'
            }, {
                wa_code: 777,
                name: 'losingyoung'
            }] 
        }, {
            id: 223,
            name: 'group2',
            owner: 777,
            members: [{
                wa_code: 777,
                name: 'losingyoung',
                gender: "0",
                avatar: ""
            }, {
                wa_code: 334,
                name: 'member2'
            }] 
        }]
    }
})
module.exports = router