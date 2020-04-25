const url = require('url');
const {
  getList,
  getDetail,
  createBlog,
  updateBlog,
} = require('../controller/blog');
const {ErrorModel, SuccessModel} = require('../model/resModel');

const handleBlogRouter = async (req, res) => {
  const {method} = req;
  const {query, pathname} = url.parse(req.url, true);
  if (method === 'GET') {
    if (pathname === '/api/blog/list') {
      const {author, keyword = ''} = query;
      const listData = await getList(author, keyword);
      return new SuccessModel(listData);
    }
    if (pathname === '/api/blog/detail') {
      const {id} = query;
      if (id === undefined) {
        return new ErrorModel('id is required!');
      }
      const data = await getDetail(id);
      return new SuccessModel(data[0]);
    }
  } else if (method === 'POST') {
    if (pathname === '/api/blog/new') {
      const params = req.body || {};
      const {title, content, author} = params;
      if (title && content && author) {
        const data = await createBlog(params);
        return new SuccessModel({id: data.insertId});
      }
      return new ErrorModel('参数缺失，请检查');
    }
    if (pathname === '/api/blog/update') {
      const params = req.body || {};
      const {title, content, author, id} = params;
      if (title && content && author && id) {
        const data = await updateBlog(params);
        if (data.affectedRows > 0) {
          return new SuccessModel();
        }
      }
      return new ErrorModel('参数缺失，请检查');
    }
  }
};
module.exports = handleBlogRouter;
