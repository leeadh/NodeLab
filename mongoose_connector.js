
// === ESTABLISH a mongo DB connection and query all objects from the db === //

var mongoose = require('mongoose');

mongoose.connect('mongodb://demo_user1:password@localhost:27017/simple_demo');

var db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// opening the connection and query all objects
db.on('open', function () {
	var cursor = db.getCollection('employee').find({},{});
	while(cursor.hasNext()){
		console.log(cursor.next());
	};
});

// === Rendering in the front end === /