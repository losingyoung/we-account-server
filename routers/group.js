
const Router = require('koa-router')
const router = new Router()

router.post('/get_groups_by_wa_code', ctx => {
    ctx.body = {
        groupInfos: [{
            id: 222,
            name: 'group1',
            owner_wa_code: 777,
            ownerName:'losingyoung',
            avatar: "http://ourrovucw.bkt.clouddn.com/avatar_girl.jpg",
            members: [{
                wa_code: 333,
                name: 'member1',
                gender: "0",
                avatar: "http://ourrovucw.bkt.clouddn.com/avatar_girl.jpg"
            }, {
                wa_code: 777,
                name: 'losingyoung',
                gender: "0",
                avatar: "",
                owner: true
            }] 
        }, {
            id: 223,
            name: 'group2',
            owner_wa_code: 737,
            ownerName:'tiffany',
            members: [{
                wa_code: 777,
                name: 'losingyoung',
                gender: "0",
                avatar: ""
            }, {
                wa_code: 737,
                name: 'tiffany',
                gender: "1",
                avatar: "",
                owner: true
            },{
                wa_code: 334,
                name: 'member2',
                gender: "0",
                avatar: ""
            }] 
        }]
    }
})
module.exports = router