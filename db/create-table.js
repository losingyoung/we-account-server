const {query} = require('./index.js')
const EventProxy = require('eventproxy');

const UserInfo = `CREATE TABLE IF NOT EXISTS userinfo (
  no int,
  wa_code char(50) NOT NULL,
  name char(50) NOT NULL,
  avatar char(100) NULL,
  avatarThumbnail char(100) NULL,
  income int NULL,
  gender char(10) NULL,
  tel char(20) NULL,
  budget int NULL,
  PRIMARY KEY (wa_code)
) ENGINE=InnoDB;`

const UserAccount = `CREATE TABLE IF NOT EXISTS user_account (
  wa_code char(50),
  account char(50) NOT NULL,
  pwd char(100) NOT NULL,
  PRIMARY KEY (account),
  FOREIGN KEY (wa_code) REFERENCES userinfo (wa_code)
) ENGINE=InnoDB;`


const TABLES = {
  UserInfo,
  UserAccount
}



function initDBTables(cb) {
  const ep = new EventProxy()
  ep.all(Object.keys(TABLES),cb)
  Object.keys(TABLES).forEach(createTable => {
    queryDB(createTable, TABLES[createTable])
  })
  function queryDB(tableEvent, sql, failTime = 0, maxFailTryTimes = 3) {
    query(sql).then(() => {
        ep.emit(tableEvent)
      }, (err) => {
        if (failTime++ < maxFailTryTimes) {
          queryDB(tableEvent, sql, failTime)
          // setTimeout(() => {},1000)
          
        } else {
          console.log('create table error', err)
          ep.emit(tableEvent, tableEvent)
        }
    })
  }
}


module.exports = initDBTables