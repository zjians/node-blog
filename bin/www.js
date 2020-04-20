const http = require('http');
const app = require('../app');

const port = 3000;
const server = http.createServer(app.handleServer);
server.listen(port);

console.log('Server running at http://127.0.0.1:3000/');
