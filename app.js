const handleUserRouter = require('./src/router/user');
const handleBlogRouter = require('./src/router/blog');

exports.handleServer = async (req, res) => {
  const userRouter = handleUserRouter(req, res);
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
