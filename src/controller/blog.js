const {exec} = require('../db/mysql');

const getList = async (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and concat(title,content) like '%${keyword}%' `;
  }
  sql += `order by createtime desc;`;
  return exec(sql);
};

const getDetail = (id) => {
  let sql = `select * from blogs where id=${id}`;
  return exec(sql);
};

const createBlog = (params = {}) => {
  const {title, content, author} = params;
  let sql = `insert into blogs (title, content, createtime, author) values ('${title}','${content}', ${Date.now()}, '${author}')`;
  return exec(sql);
};

const updateBlog = (params) => {
  const {title, content, author, id} = params;
  let sql = `update blogs set title='${title}', content='${content}', author='${author}', updatetime=${Date.now()} where id=${id};`;
  return exec(sql);
};

module.exports = {
  getList,
  getDetail,
  createBlog,
  updateBlog,
};
