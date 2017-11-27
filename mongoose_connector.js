var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/simple_demo');
var db = mongoose.connection;

db.on('open', function () {
  	console.log("connection ok");
  	db.db.listCollections().toArray(function (err, names) {
  		console.log(names); // [{ name: 'dbname.myCollection' }]
    	module.exports.Collection = names;
	});
});
