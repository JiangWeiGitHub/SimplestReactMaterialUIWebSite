var express = require("express");
var app     = express();

app.use(express.static(__dirname + '/web'));

app.get('/',function(req,res){
  res.sendFile('index.html');
});

app.get('/about',function(req,res){
  res.sendFile('/about.html');
});

app.get('/sitemap',function(req,res){
  res.sendFile('/sitemap.html');
});

app.listen(3333);

console.log("Running at Port 3333");
