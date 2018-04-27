const Router = require('koa-router')
const router = new Router()

router.post("/add_item", ctx => {
    ctx.body = {
        success: true
    }
})
/*
 *wa_code
 */
router.post("/get_personal_account_items", ctx => {
    ctx.body = {
        totalCost: 1000,
        averageDay: 50,
        items: [
            {
                wa_code: 777,
                categoryId: 1,
                categoryName: 'bus',
                CategoryType: 'coffee',
                price: 20,
                description: 'some desc',
                date: 15201253,
                outcome: "0"
            },
            {
                wa_code: 777,
                categoryId: 1,
                categoryName: 'bus',
                CategoryType: 'coffee',
                price: 30,
                description: 'some desc',
                date: 152012503,
                outcome: "0"
            }
        ]
    }
})
/*
 *group_id
 */
router.post("/get_group_account_items", ctx => {
    ctx.body = {
        totalCost: 1000,
        averageDay: 50,
        averageDayPerson: 30,
        items: [{
            group_id:222,
            wa_code: 777,
            categoryId: 1,
            categoryName: 'bus',
            CategoryType: 'coffee',
            price: 20,
            description: 'some desc',
            date: 15201253,
            outcome: "0"
        }]
    }
})
module.exports = router