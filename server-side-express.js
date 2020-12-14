const express = require("express");
const app = express();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert'); //utilitzem assercions

var ObjectId = require('mongodb').ObjectID;
var bodyParser = require('body-parser');

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      // allowed XHR methods  
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/AddToMongo', (req, res) => {
    var route = 'mongodb://localhost:27017/form_validator';


    MongoClient.connect(route, function (err, db) {
        assert.equal(null, err);
        console.log("correct conexion");
        console.log(req.body);
        db.collection('users').insertOne({
            "username": req.body.username,
            "password": req.body.password
        });
        assert.equal(err, null);
        console.log("Added correctly");

    });
    res.send('Added correctly');
})

  
app.listen(8888, function() {
  console.log("Running on port 8888.");
});