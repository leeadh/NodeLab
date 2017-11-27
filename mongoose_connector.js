
// === ESTABLISH a mongo DB connection and query all objects from the db === //
const http = require('http') 
const port = 8000 // define whatever port you like
var mongoose = require('mongoose');
mongoose.connect('mongodb://demo_user1:password@localhost:27017/simple_demo');
var db = mongoose.connection;
var json = [];


const requestHandler = (request, response) => { 
	console.log(request.url)
	response.end('test')
}


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('open', function () {
  	db.db.collection('employee',function (err, collection) {
  		collection.find().toArray(function(err,items){
  			if (err) throw err;
  			items.forEach(function(item){
  				json.push(item);
  				
  			});
  			console.log(json);
  		});
	});
});


const server = http.createServer(requestHandler)

server.listen(port, (err) => { 
	if (err) {
		return console.log('something happened', err)
	}
	console.log(`server is listening on ${port}`)
})


// === Rendering in the front end === /