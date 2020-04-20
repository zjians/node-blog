const url = require('url');
const handleUserRouter = (req, res) => {
  const {method} = req;
  const {query, pathname} = url.parse(req.url, true);
  if (method === 'GET') {
  } else if (method === 'POST') {
    if (pathname === '/api/user/login') {
      return {
        msg: '这是login接口',
      };
    }
  }
};
module.exports = handleUserRouter;
