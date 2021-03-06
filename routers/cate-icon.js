
const Router = require('koa-router')
const router = new Router()

router.post('/get_personal_icons', ctx => {
    ctx.body = {
        nextIconId: 2,
        icons: [{
            id: 123,
            type: 'sports',
            title: '运动'
        }, {
            id: 1234,
            type: 'transport',
            title: '交通'
        }, {
            id: 12345,
            type: 'travel',
            title: '旅游'
        }, {
            id: 123456,
            type: 'photo',
            title: '摄影'
        }, {
            id: 223456,
            type: 'car',
            title: '汽车'
        }, {
            id: 323456,
            type: 'pet',
            title: '宠物'
        }, {
            id: 423456,
            type: 'coffee',
            title: '社交'
        }, {
            id: 523456,
            type: 'file',
            title: '工作'
        }]
    } 
})
router.post('/get_group_icons', ctx => {
    ctx.body ={
        nextIconId: 3,
        icons: [{
            id: 123,
            type: 'sports',
            title: '运动'
        }, {
            id: 1234,
            type: 'transport',
            title: '交通'
        }, {
            id: 12345,
            type: 'travel',
            title: '旅游'
        }, {
            id: 123456,
            type: 'photo',
            title: '摄影'
        }]
    } 
})
router.post('/get_default_icons', ctx => {
    ctx.body = [{
        id: 123,
        type: 'sports',
        title: '运动'
    }, {
        id: 1234,
        type: 'transport',
        title: '交通'
    }, {
        id: 12345,
        type: 'travel',
        title: '旅游'
    }, {
        id: 123456,
        type: 'photo',
        title: '摄影'
    }]
})
router.post('/add_icon', ctx => {
    ctx.body = {
        success: true,
        nextIconId: 4
    }
})
router.post('/update_icon', ctx => {
    ctx.body = {
        success: true
    }
})
router.post('/delete_icon', ctx => {
    ctx.body = {
        success: true
    }
})
module.exports = router
