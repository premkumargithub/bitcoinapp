var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hello world');
});

app.listen(4000);

console.log('Server is runnig on port: 4000 ...');


