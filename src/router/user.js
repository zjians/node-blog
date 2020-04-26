const url = require('url');
const {postLogin} = require('../controller/user');
const {ErrorModel, SuccessModel} = require('../model/resModel');

const handleUserRouter = async (req, res) => {
  const {method} = req;
  const {query, pathname} = url.parse(req.url, true);
  if (method === 'GET') {
  } else if (method === 'POST') {
    const params = req.body;
    if (pathname === '/api/user/login') {
      const {username, password} = params;
      if (username && password) {
        const data = await postLogin(params);
        if (data && data.length) {
          // 登录成功则 set-cookie
          let expire = 3600 * 1000; // 一小时后过期
          let time = new Date(Date.now() + expire).toGMTString();
          const sessionId = `${Date.now()}_${Math.random()}`;
          global.USERSESSON[sessionId] = {
            username,
            password,
          };
          res.setHeader('Set-Cookie', [
            `sessionId=${sessionId};path=/;httpOnly;expires=${time}`,
          ]);
          return new SuccessModel('登录成功');
        }
      }
      return new ErrorModel('登录失败');
    }
  }
};
module.exports = handleUserRouter;
