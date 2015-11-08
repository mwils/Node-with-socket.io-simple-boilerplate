var express = require('express');
var app = express();

app.set('port', (5002));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});