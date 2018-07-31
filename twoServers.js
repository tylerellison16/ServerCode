var http = require("http");

var PORT = 7000;

function handleRequest(request, response) {

    response.end("You Rock! " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
})


var PORT1 = 7500;

function handleRequest1(request, response) {

    response.end("You Wack! " + request.url);
}

var server = http.createServer(handleRequest1);

server.listen(PORT1, function(){
    console.log("Server listening on: http://localhost:%s", PORT1);
})
