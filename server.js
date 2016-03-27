//http://www.nodebeginner.org/index-zh-cn.html#hello-world

var http = require("http");


function start() {
    counter = 0;

    function onRequest(request, response) {
        console.log("response " + counter);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World " + counter++);
        response.end();
    };

    http.createServer(onRequest).listen(8888);
    console.log("Server running");
}



exports.start = start;