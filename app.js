var express = require('express');
var app = express();
var mongoManager = require('./mongo-manager');
var bodyParser = require('body-parser');

app.use(require('body-parser').json());

app.post('/', function(req, res) {
    mongoManager.addPost(req.body);
    res.send("Success");
})

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Listening on localhost:3000');
});