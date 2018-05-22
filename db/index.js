
// const Sequelize = require('sequelize');
const config = require('../config').dbOptions
const dbOptions = {
    host: config.host,
    user:  config.username,
    password: config.password,
    database: config.database,
    port:config.port
  }
const mysql = require('mysql2');
const pool = mysql.createPool(dbOptions)

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
                return
            }
            connection.query(sql, values, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
                connection.release()     
            })
        })
    })
}
module.exports = {
    query
}