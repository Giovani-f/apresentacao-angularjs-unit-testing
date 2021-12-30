var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

app.use(express.static(__dirname + '/src/app'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/app/index.html'));
});

app.listen(3000);
console.log('serve is running on 3000');
