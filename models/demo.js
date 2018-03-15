const db = require('../db')
const Sequelize = require('sequelize');
module.exports =db.define('demo', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    name: Sequelize.STRING,
    age: Sequelize.BIGINT
}, {timestamps: false});