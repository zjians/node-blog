const url = require('url');
const {getList, getDetail, createBlog} = require('../controller/blog');
const {ErrorModel, SuccessModel} = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const {method} = req;
  const {query, pathname} = url.parse(req.url, true);
  if (method === 'GET') {
    if (pathname === '/api/blog/list') {
      const {author, keyword = ''} = query;
      const listData = getList(author, keyword);
      return new SuccessModel(listData);
    }
    if (pathname === '/api/blog/detail') {
      const {id} = query;
      const data = getDetail(id);
      return new SuccessModel(data);
    }
  } else if (method === 'POST') {
    if (pathname === '/api/blog/new') {
      const params = req.body;
      const data = createBlog(params);
      return new SuccessModel(data);
    }
  }
};
module.exports = handleBlogRouter;
