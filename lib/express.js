var express = require('express');
var app = express();

app.use(express.bodyParser());
app.use(express.methodOverride());
	
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

module.exports = app;