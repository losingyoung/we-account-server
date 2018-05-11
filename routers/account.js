const Router = require('koa-router')
const router = new Router()
// const formidable = require("formidable");
// const fs = require('fs')
router.post("/add_item",async ctx => {
            ctx.body = {
            success: true
        }
})
// /*
//  *wa_code
//  */
// router.post("/get_personal_account_items", ctx => {
//     ctx.body = {
//         totalCost: 1000,
//         averageDay: 50,
//         items: [
//             {
//                 wa_code: 777,
//                 categoryId: 1,
//                 categoryName: 'bus',
//                 CategoryType: 'coffee',
//                 price: 20,
//                 description: 'some desc',
//                 date: 15201253,
//                 dateStr:"2018年10月23日",
//                 isOutcome: "0" //收入还是支出
//             },
//             {
//                 wa_code: 777,
//                 categoryId: 1,
//                 categoryName: 'bus',
//                 CategoryType: 'coffee',
//                 price: 30,
//                 description: 'some desc',
//                 date: 152012503,
//                 dateStr:"2018年10月23日",
//                 isOutcome: "0" //收入还是支出
//             }
//         ]
//     }
// })
// /*
//  *group_id
//  */
// router.post("/get_group_account_items", ctx => {
//     ctx.body = {
//         totalCost: 1000,
//         averageDay: 50,
//         averageDayPerson: 30,

//         items: [{
//             group_id:222,
//             wa_code: 777,
//             submitBy:777,
//             updateBy:888,
//             categoryId: 1,
//             categoryName: 'bus',
//             categoryType: 'coffee',
//             price: 20,
//             description: 'some desc',
//             date: 15201253,
//             dateStr:"2018年10月23日",
//             isOutcome: "0"
//         }, {
//             group_id:222,
//             wa_code: 777,
//             submitBy:777,
//             updateBy:888,
//             categoryId: 1,
//             categoryName: 'bus',
//             categoryType: 'coffee',
//             price: 20,
//             description: 'some desc',
//             date: 15201253,
//             dateStr:"2018年10月23日",
//             isOutcome: "0"
//         }]
//     }
// })
Array.prototype.concatAll = function() {
   return this.reduce(function(sum,cur) {
        return sum.concat(cur)
    }, [])
}
Array.prototype.reduceObj = function() {
    return this.reduce((sum, cur) => Object.assign({}, sum, cur), {})
}
router.post('/get_account_items', ctx => {
    const Details = [{
        year: 2017,
        totalCost: 40000,
        monthDetail: [{
                month: 11,
                totalCost: 4000,
                categoryDetail: [{
                    categoryId: 1,
                    categoryName: 'bus',
                    totalCost:432
               }],
               personDetail: [{
                   wa_code:777,
                   name: 'tiffan',
                   totalCost:312
               }]
            }, {
                  month: 12,
                  totalCost: 4200,
                  categoryDetail: [{
                    categoryId: 1,
                    categoryName: 'bus',
                    totalCost:432
                 }]
              }]
       }, {
            year: 2018,
            totalCost: 4000,
            monthDetail: [{
                  month: 1,
                  totalCost: 4000,
                  categoryDetail: [{
                    categoryId: 1,
                    categoryName: 'bus',
                    totalCost:432
                 }, {
                    categoryId: 2,
                    categoryName: 'bus',
                    totalCost:432
                 }]
              }, {
                    month: 2,
                    totalCost: 4200,
                    categoryDetail: [{
                        categoryId: 1,
                        categoryName: 'bus',
                        totalCost:432
                   }, {
                        categoryId: 3,
                        categoryName: 'bus',
                        totalCost:432
                 }]
                }]
        }]
        const monthData = Details.map(year => year.monthDetail.reduce((sum,month) => Object.assign(sum, {
                    [month.month]: Object.assign(month, {
                        person: month.personDetail && month.personDetail.reduce((sum, cur) => Object.assign({}, sum, {
                            [cur.wa_code]: cur
                        }), {}),
                        category: month.categoryDetail && month.categoryDetail.reduce((sum, cur) => Object.assign({}, sum, {
                            [cur.categoryId]: cur
                        }), {})
                    })
                }), {})
        ).reduce((sum, cur) =>  Object.assign(sum, cur), {})
        console.log(monthData)
        const yearData = Details.map(year => {
           const catePersonTotal = year.monthDetail.map(month => {
                return {categoryDetail: month.categoryDetail, personDetail: month.personDetail}
            }).reduce((sum, cur) => {
                if (cur.categoryDetail) {
                    cur.categoryDetail.map(cate => {
                        const curCateId = cate.categoryId
                        if (typeof sum.category[curCateId] === 'undefined') {
                            sum.category[curCateId] = Object.assign({}, cate, {totalCost: 0})
                        }
                        sum.category[curCateId].totalCost += cate.totalCost
                    })
                }
                if (cur.personDetail) {
                    cur.personDetail.map(person => {
                        const curCateId = person.wa_code
                        if (typeof sum.person[curCateId] === 'undefined') {
                            sum.person[curCateId] = Object.assign({}, person, {totalCost: 0})
                        }
                        sum.person[curCateId].totalCost += person.totalCost
                    })
                }
                return sum
            }, {category: {}, person: {}})
            return {
                [year.year]:  Object.assign({
                    totalCost: year.totalCost
                }, catePersonTotal)
            }
        }).reduceObj()
        console.log(yearData)
       ctx.body={
        personalAccountItems: [{
            wa_code: 777,
            totalCost: 1000,
            averageDay: 50,
            chartData: {
                totalOverview: {
                    date: [3,4,5, 6, 7, 8, 9, 10, 11, 12, 1, 2],
                    data: [1234567,1,2,3,4,5,6,7,8,9,40,1220]
                },
                yearData,
                monthData
                // 根据Details生成以下数据
                /**每月 点击月 展示相应的category
                 * {
                 * 1:{category:[{}],person:[{}]}
                 * 2:{category:[],person:[]}
                 * }
                 */

                /**每年
                 * {2017:{
                 *   category:[{
                 *   categoryId:3123,
                 *   totalCost:4444
                 * }],
                 * person:[{
                 *   wa_code:777,
                 *   totalCost:5000
                 * }]
                 * }}
                 */
            },
            items: [
                {
                    itemId:1,
                    wa_code: 777,
                    userName: 'tiffany1',
                    categoryId: 1,
                    categoryName: 'bus',
                    CategoryType: 'coffee',
                    price: 20,
                    description: 'some desc1 some desc1 some desc1 some desc1some desc1some desc1some desc1some desc1some desc1',
                    date: 15201253,
                    year: 2018,
                    month: 4,
                    dateStr:"2018年10月23日",
                    isOutcome: "0" //收入还是支出
                },
                {
                    itemId:2,
                    wa_code: 777,
                    userName: 'tiffany3',
                    categoryId: 1,
                    categoryName: 'bus',
                    CategoryType: 'coffee',
                    price: 30,
                    description: 'some desc2',
                    date: 152012503,
                    year: 2018,
                    month: 4,
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
                    date: ["3月","4月","5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月"],
                    data: [123456789012,40200,59430,40200,40200,40200,40200,40200,40200,40200,40200,880200]
                }
            },
            items: [{
                itemId:3,
                group_id:222,
                wa_code: 777,
                userName: 'tiffany',
                submitBy:777,
                updateBy:888,
                categoryId: 1,
                categoryName: 'bus',
                categoryType: 'coffee',
                price: 20,
                description: 'some desc3',
                date: 15201253,
                year: 2018,
                month: 4,
                dateStr:"2018年10月23日",
                isOutcome: "0"
            }, {
                itemId:4,
                group_id:222,
                wa_code: 777,
                userName: 'tiffany2',
                submitBy:777,
                updateBy:888,
                categoryId: 1,
                categoryName: 'bus',
                categoryType: 'coffee',
                price: 20,
                description: 'some desc4',
                date: 15201253,
                year: 2018,
                month: 4,
                dateStr:"2018年10月23日",
                isOutcome: "0"
            }]
        }, {
            group_id:223,
            totalCost: 0,
            averageDay: 0,
            averageDayPerson: 0,
            year: 2018,
            month: 4,
            chartData: {
                totalOverview: {
                    date: ["1"],
                    data: [1234567]
                }
            },
            items: []
        }]
    }
})
module.exports = router