const http = require('http');
const app = require('../app');
require('dotenv').config()


const  normalizePort = (val) =>  {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


const server = http.createServer(app);



const  onListening = () =>  {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}

server.listen(port);
server.on('listening', onListening);