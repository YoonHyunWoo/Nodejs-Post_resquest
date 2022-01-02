var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
const port = 3000;
var express = require('express');
var app = express();

var server = app.use(function(req, res) {

    if(req.method == 'GET'){
        fs.readFile('./index.html' ,'utf8' ,function(error, data) {
            res.send(data);
        });
    }
    else if(req.method == 'POST'){
        req.on('data', function(chunk){
            console.log(chunk.toString());
            var data = querystring.parse(chunk.toString());
            res.send('ID : ' + data.id + 'PW : ' + data.pw);
        });
    }

}).listen(port, function() {
    console.log('Server is running...');
});
