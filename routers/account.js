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
                dateStr:"2018年10月23日",
                isOutcome: "0" //收入还是支出
            },
            {
                wa_code: 777,
                categoryId: 1,
                categoryName: 'bus',
                CategoryType: 'coffee',
                price: 30,
                description: 'some desc',
                date: 152012503,
                dateStr:"2018年10月23日",
                isOutcome: "0" //收入还是支出
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
            submitBy:777,
            updateBy:888,
            categoryId: 1,
            categoryName: 'bus',
            categoryType: 'coffee',
            price: 20,
            description: 'some desc',
            date: 15201253,
            dateStr:"2018年10月23日",
            isOutcome: "0"
        }, {
            group_id:222,
            wa_code: 777,
            submitBy:777,
            updateBy:888,
            categoryId: 1,
            categoryName: 'bus',
            categoryType: 'coffee',
            price: 20,
            description: 'some desc',
            date: 15201253,
            dateStr:"2018年10月23日",
            isOutcome: "0"
        }]
    }
})
router.post('/get_account_items', ctx => {
    ctx.body={
        personalAccountItems: [{
            wa_code: 777,
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
                    dateStr:"2018年10月23日",
                    isOutcome: "0" //收入还是支出
                },
                {
                    wa_code: 777,
                    categoryId: 1,
                    categoryName: 'bus',
                    CategoryType: 'coffee',
                    price: 30,
                    description: 'some desc',
                    date: 152012503,
                    dateStr:"2018年10月23日",
                    isOutcome: "0" //收入还是支出
                }
            ]
        }],
        groupAccountItems: [{
            group_id:222,
            totalCost: 20000,
            averageDay: 50,
            averageDayPerson: 30,
            items: [{
                group_id:222,
                wa_code: 777,
                submitBy:777,
                updateBy:888,
                categoryId: 1,
                categoryName: 'bus',
                categoryType: 'coffee',
                price: 20,
                description: 'some desc',
                date: 15201253,
                dateStr:"2018年10月23日",
                isOutcome: "0"
            }, {
                group_id:222,
                wa_code: 777,
                submitBy:777,
                updateBy:888,
                categoryId: 1,
                categoryName: 'bus',
                categoryType: 'coffee',
                price: 20,
                description: 'some desc',
                date: 15201253,
                dateStr:"2018年10月23日",
                isOutcome: "0"
            }]
        }]
    }
})
module.exports = router