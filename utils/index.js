const querystring = require('querystring');
const {get: redisGet} = require('../src/db/redis');

/**
 * 获取post数据，并将数据格式化放到req.body上
 */
const getPostData = (req) => {
  if (req.method === 'POST') {
    return new Promise((resolve, reject) => {
      let res = '';
      req.on('data', (chunk) => {
        res += chunk;
      });
      req.on('end', () => {
        const contentType = req.headers['content-type'];
        if (contentType === 'application/json') {
          resolve(JSON.parse(res));
        } else if (contentType === 'application/x-www-form-urlencoded') {
          resolve(querystring.parse(res));
        } else {
          resolve({});
        }
      });
    });
  }
};

/**
 * 获取cookie
 */
const getCookie = (cookieStr) => {
  const cookie = {};
  if (cookieStr) {
    cookieStr.split(';').map((item) => {
      const [key, value] = item.split('=');
      key && (cookie[key.trim()] = value);
    });
    return cookie;
  }
  return null;
};

/**
 * 验证是否登录
 * @param {object} params
 */
const validateLogin = async (req) => {
  const cookie = req.headers.cookie || '';
  const cookieObj = getCookie(cookie);
  if (!cookieObj) return false;
  const data = await redisGet(cookieObj['sessionId']);
  if (data) {
    return true;
  }
  return false;
};

module.exports = {getPostData, getCookie, validateLogin};
