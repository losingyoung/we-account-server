const Router = require('koa-router')
const router = new Router()


router.post("/get_notifications", ctx => {

    console.log("????")
    ctx.body= {
        success: true,
        notifications: [{
            id: 1,
            date: "2018年4月2日 15:22",
            sender_wa_code: 737,
            senderName: 'Tiffany',
            receiver_wa_code: 777,
            request: "0",
            related_group_id: 222,
            relatedGroupName: 'family1',
            description: 'Tiffany邀请你加入组family1',
            message: "欢迎加入我的战队"
        }, {
            id: 2,
            date: "2018年4月3日 16:33",
            sender_wa_code: 747,
            senderName: 'Tiffany2',
            receiver_wa_code: 777,
            request: "1",
            related_group_id: 223,
            relatedGroupName: 'family2',
            description: 'Tiffany2申请加入组family2',
            message: "请求加入"
        }, {
            id: 3,
            date: "2018年4月4日 17:33",
            sender_wa_code: 757,
            senderName: 'Tiffany3',
            receiver_wa_code: 777,
            response: "0",
            result: "0",
            related_group_id: 223,
            relatedGroupName: 'family3',
            description: 'Losingyoung已同意加入组family3',
            message: "谢邀"
        }, {
            id: 4,
            date: "2018年4月4日 19:33",
            sender_wa_code: 767,
            senderName: 'Tiffany4',
            receiver_wa_code: 777,
            response: "1",
            result: "1",
            related_group_id: 222,
            relatedGroupName: 'family4',
            description: 'losingyoung拒绝了你加入family4的申请',
            message: "不许进"
        }]
    }
})
module.exports = router