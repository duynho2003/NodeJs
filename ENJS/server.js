const http=require("http");
const server=http.createServer();

server.on('request',function(req,res){
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    res.end("123");
});

server.on('listening',function(){
    console.log("server running");
});
server.listen(3000);