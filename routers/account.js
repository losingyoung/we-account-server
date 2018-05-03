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
            chartData: {
                totalOverview: {
                    date: ["3月","4月","5月"],
                    data: [3030,4020,5943]
                }
            },
            items: [
                {
                    itemId:1,
                    wa_code: 777,
                    categoryId: 1,
                    categoryName: 'bus',
                    CategoryType: 'coffee',
                    price: 20,
                    description: 'some desc1',
                    date: 15201253,
                    dateStr:"2018年10月23日",
                    isOutcome: "0" //收入还是支出
                },
                {
                    itemId:2,
                    wa_code: 777,
                    categoryId: 1,
                    categoryName: 'bus',
                    CategoryType: 'coffee',
                    price: 30,
                    description: 'some desc2',
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
            chartData: {
                totalOverview: {
                    date: ["3月","4月","5月"],
                    data: [80300,40200,59430]
                }
            },
            items: [{
                itemId:3,
                group_id:222,
                wa_code: 777,
                submitBy:777,
                updateBy:888,
                categoryId: 1,
                categoryName: 'bus',
                categoryType: 'coffee',
                price: 20,
                description: 'some desc3',
                date: 15201253,
                dateStr:"2018年10月23日",
                isOutcome: "0"
            }, {
                itemId:4,
                group_id:222,
                wa_code: 777,
                submitBy:777,
                updateBy:888,
                categoryId: 1,
                categoryName: 'bus',
                categoryType: 'coffee',
                price: 20,
                description: 'some desc4',
                date: 15201253,
                dateStr:"2018年10月23日",
                isOutcome: "0"
            }]
        }, {
            group_id:223,
            totalCost: 0,
            averageDay: 0,
            averageDayPerson: 0,
            chartData: {
                totalOverview: {
                    date: [],
                    data: []
                }
            },
            items: []
        }]
    }
})
module.exports = router