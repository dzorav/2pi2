var static = require('node-static');
var http = require('http');
var port = process.env.PORT || 80
var file = new (static.Server)(__dirname);

http.createServer(function (req, res) {
    file.serve(req, res);
}).listen(port);