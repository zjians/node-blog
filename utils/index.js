const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    let res = '';
    req.on('data', (chunk) => {
      res += chunk;
    });
    req.on('end', () => {
      resolve(res);
    });
  });
};

module.exports = {getPostData};
