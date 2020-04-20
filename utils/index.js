const getPostData = (req) => {
  if (
    req.method === 'POST' &&
    req.headers['Content-Type'] === 'application/json'
  ) {
    return new Promise((resolve, reject) => {
      let res = '';
      req.on('data', (chunk) => {
        res += chunk;
      });
      req.on('end', () => {
        resolve(JSON.parse(res));
      });
    });
  }
};

module.exports = {getPostData};
