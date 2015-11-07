var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write('Hello World!');
  res.end();
}).listen(5000);

console.log('listening on port 5000...');