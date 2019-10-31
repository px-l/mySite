var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('欢迎来访')
})
var server = app.listen(80,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("应用已启动，访问地址为 http://%s:%s", host, port)
})