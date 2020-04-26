const handleUserRouter = require('./src/router/user');
const handleBlogRouter = require('./src/router/blog');
const url = require('url');
const {getPostData, validateLogin} = require('./utils');
global.USERSESSON = {};

exports.handleServer = async (req, res) => {
  const {pathname} = url.parse(req.url, true);
  if (pathname !== '/api/user/login') {
    const isLogin = await validateLogin(req);
    if (!isLogin) {
      res.writeHead(401, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({code: 1000, message: '请先登录'}));
      return;
    }
  }
  req.body = (await getPostData(req)) || {};
  const userRouter = await handleUserRouter(req, res);
  const blogRouter = await handleBlogRouter(req, res);
  res.writeHead(200, {'Content-Type': 'application/json'});
  if (userRouter) {
    res.end(JSON.stringify(userRouter));
    return;
  }
  if (blogRouter) {
    res.end(JSON.stringify(blogRouter));
    return;
  }
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('404 not fined');
};
