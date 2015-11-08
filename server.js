var express = require('express');
var app = express();

var port = process.env.PORT || 5002;

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Node app is running on port', port);
});