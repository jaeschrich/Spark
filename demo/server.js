var http = require('http')
var fs = require('fs')
var qs = require("querystring")
var url = require("url")

var msg = ""
http.createServer(function(req, res){
var path = url.parse(req.url).pathname
console.log("Request recieved for "+path)
switch (path){
case '/':
        fs.readFile('demo/index.html', function(err, data){
                    if (err){console.log(err)}
                    res.writeHead(200, {"Content-Type": "text/html"})
                    res.end(data) 
        })
        break;
case '/spark.js':
        fs.readFile('spark.js', function(err, data){
                    if (err){console.log(err);}
                    res.writeHead(200, {"Content-Type": "text/javascript"})
                    res.end(data)
        })
        break;
case '/main.js':
        fs.readFile('demo/main.js', function(err, data){
                    if (err){console.log(err);}
                    res.writeHead(200, {"Content-Type": "text/javascript"})
                    res.end(data)
        })
        break;
case '/upload':
        var body = ""
        req.on('data', function(data){
        body += data
        })
        req.on('end', function(){
            res.writeHead(302, {"Location": "/"})
            res.end()
            msg = msg + qs.parse(body).msg + "<br>"
        })
        break;
case '/post':
        res.writeHead(200, {"Content-Type": 'text/html'})
        res.end(msg)
        break;
case '/test':
        fs.readFile('demo/test.js', function(err, data){
                    if (err){console.log(err);}
                    res.writeHead(200, {"Content-Type": "text/javascript"})
                    res.end(data)
        })
        break;
default: 
    res.writeHead(404, {"Content-Type": "text/plain"})
    res.end("404")
    break;
}
}).listen(process.env.PORT)
console.log("Server Started")