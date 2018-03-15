
// const Sequelize = require('sequelize');
const config = require('../config').dbOptions

// var sequelize = new Sequelize(config.database, config.username, config.password, {
//     host: config.host,
//     dialect: 'mysql',
//     port: 3050,
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 30000
//     }
// });

const mysql = require('mysql2/promise');

// create the connection to database



module.exports = async function connection() {
    let connection =await mysql.createConnection({
        host: config.host,
        user:  config.username,
        password: config.password,
        database: config.database,
        port:config.port
      });
      return connection
}