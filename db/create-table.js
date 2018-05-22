const createUserInfo = `CREATE TABLE IF NOT EXISTS userinfo (
  wa_code char(50) NOT NULL,
  name char(50) NOT NULL,
  PRIMARY KEY (wa_code) 
) ENGINE=InnoDB;`


module.exports = {
    createUserInfo
}