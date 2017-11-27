
// === ESTABLISH a mongo DB connection and query all objects from the db === //

var mongoose = require('mongoose');

mongoose.connect('mongodb://demo_user1:password@localhost:27017/simple_demo');

var db = mongoose.connection;

var json = [];
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// opening the connection and query all objects
db.on('open', function () {
  	db.db.collection('employee',function (err, collection) {
  		collection.find().toArray(function(err,items){
  			if (err) throw err;
  			items.forEach(function(item){
  				//console.log(item);
  				json.push(item.);
  				console.log(json);
  			});

  		});

	});
});



// === Rendering in the front end === /