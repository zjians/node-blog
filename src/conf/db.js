const env = process.env.NODE_ENV;

let MYSQL_CONF;

if (env === 'development') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'Zhoujian123',
    port: '3306',
    database: 'blog',
  };
} else if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'Zhoujian123',
    port: '3306',
    database: 'blog',
  };
}

module.exports = {
  MYSQL_CONF,
};
