
// === ESTABLISH a mongo DB connection and query all objects from the db === //

var mongoose = require('mongoose');
var express = require ('express');
var bodyParser = require('body-parser');
var app = express();

//configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT||3000;

var router = express.Router();

router.get('/',function(req,res){
	res.json({message: 'hello'});
});


app.use('/api',router)
app.listen(port);

mongoose.connect('mongodb://demo_user1:password@localhost:27017/simple_demo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// opening the connection and query all objects
db.on('open', function () {
  	db.db.collection('employee',function (err, collection) {
  		collection.find().toArray(function(err,items){
  			if (err) throw err;
  			console.log(items);

  		});

	});
});