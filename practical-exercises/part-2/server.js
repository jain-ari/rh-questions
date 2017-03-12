var app = require('http').createServer(handler);
var fs = require('fs');
var url = require('url');
var path = require('path');
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(server_port, server_ip_address, function() {
    console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});

function handler(req, res) {
    var ff = __dirname + url.parse(req.url).pathname;
    if (ff == '/' || ff == '') {
        ff = '/index.html';
    }
    fs.readFile(ff,
        function(err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading file.');
            }

            res.writeHead(200);
            res.end(data);
        });
}