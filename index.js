const http = require("http");

let state = 10;

const server = http.createServer(handleRequest); // create server

function handleRequest(request, response) {
    console.log(request.url);
    if (request.url === "/state") {
        response.writeHead(200, {'Content-Type': "text/html"}); // declare the data type
        response.end("<h1> '10' </h1>");
    }
    else if (request.url === "/add") {
        state++;
        response.writeHead(200, {'Content-Type': "text/html"});
        response.end("<h1> OK </h1>");
    }
    else if (request.url === "/substract") {
        state--;
        response.writeHead(200, {'Content-Type': "text/html"});
        response.end("<h1> OK </h1>");
    }
    else if (request.url === "/reset") {
        state = 10;
        response.writeHead(200, {'Content-Type': "text/html"});
        response.end("<h1> OK </h1>");
    }
    else if (request.url === "/bad") {
        response.writeHead(404, {'Content-Type': "text/html"});
        response.end("<h1> Not Found </h1>");
    }
}

server.listen(8080, function(error) {
    if (error) console.log(error);
    else console.log("Listening on port 8080...");
});
