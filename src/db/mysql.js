const {MYSQL_CONF} = require('../conf/db');
const mysql = require('mysql');
const con = mysql.createConnection(MYSQL_CONF);

con.connect();

const exec = (sql) => {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};

module.exports = {
  exec,
};
