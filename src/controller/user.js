const {exec} = require('../db/mysql');

const postLogin = (params) => {
  const {username, password} = params;
  let sql = `select * from users where username='${username}' and password='${password}';`;
  return exec(sql);
};

module.exports = {
  postLogin,
};
