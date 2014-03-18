var express = require('express');

var app = express();
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

module.exports = function(port, cb) {
    app.set('port', port || 3000);
    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
        cb(app, server);
    });
};