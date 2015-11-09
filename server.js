// Module dependencies
var   express = require('express'),
      app = express(),
      server = require('http').createServer(app),
      io = require('socket.io')(server);

// Set location of static assets
app.use(express.static(__dirname + '/public'));

// Log out to console when a client connects
io.on('connection', function(client) {
  console.log('Client connected successfully');
  client.on('disconnect', function(client) {
    console.log('Client left');
  });
});


// Set port or allow Heroku
var port = process.env.PORT || 8080;
server.listen(port, function() {
  console.log('Node app is running on port ', port);
});