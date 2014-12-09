var express = require("express");
var server  = express();

var conf    = require("./server/config");

server.use("/", express.static(__dirname+"/public/"));

server.listen(conf.server.local.port, conf.server.local.host, function(){
    console.log("server listening on :" +conf.server.local.host+":"+conf.server.local.port);
});