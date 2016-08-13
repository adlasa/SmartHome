var express = require('express');
var app = express();
var router = express.Router();
var mongoManager = require('./lib/mongo-manager');

router.use(function (req,res,next) {
    console.log(req.method + " at " + Date());
    next();
});
router.use('/data', require('body-parser').json());

router.get("/",function(req,res){
    res.sendFile(__dirname + '/views/index.html');
});

router.post('/data', function(req, res) {
    mongoManager.addPost(req.body);
    res.send("Success");
})

app.use("/",router);

app.use("*",function(req,res){
    res.sendFile(__dirname + "/views/error.html");
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).sendFile(__dirname + "/views/error.html");
});

app.listen(3000, function () {
    console.log('Listening on localhost:3000');
});