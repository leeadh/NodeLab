var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://demo_user1:password@localhost:27017/simple_demo';
var str = "";

app.get('/',function(req, res) {
   MongoClient.connect(url, function(err, db) {
       var collection = db.collection('employee');
       var cursor = collection.find({});
       var str = "<table>";
       cursor.forEach(function(item) {
           if (item != null) {
                   str = str + "<tr><td>" + item.usrName +"</td></tr>";
           }
          
       }, function(err) {
          str = str +"</table>";
          res.send(str);
           db.close();
          }
       );
   });
});

var server = app.listen(8000, function() {});
