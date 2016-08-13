var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/mongodb';
var db;

MongoClient.connect(url, function(err, database) {
        assert.equal(null, err);
        db = database;
        console.log("Connected correctly to database.");
});

exports.addPost = function(json) {
    db.collection('sensor_input').insertOne(json, function(err, res) {
        assert.equal(err, null);
        console.log("Inserted sensor input from: " + json.name);
    });
}
