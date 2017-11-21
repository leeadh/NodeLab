// hello-server.js

const http = require('http') 
const port = 8000 // define whatever port you like

const requestHandler = (request, response) => { 
 console.log(request.url)
 response.end('Hello World')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => { 
 if (err) {
 return console.log('something happened', err)
 }

 console.log(`server is listening on ${port}`)
})
