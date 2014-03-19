var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.methodOverride());
	
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

module.exports = app;

