var mongoose = require('mongoose');
mongoose.connect('mongodb://demo_user1:password@localhost:27017/simple_demo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('open', function () {
  	db.db.collection('employee',function (err, collection) {
  		collection.find().toArray(function(err,items){
  			console.log(items);

  		});

	});
});