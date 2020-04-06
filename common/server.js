var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || '3333';
app.use(bodyParser());

//compileX
var compiler = require('compilex');
var option = {stats : true};
compiler.init(option);


app.post('/api/execute' , function (req , res ) {

	var code = req.body.code;
  compiler.compileJava( { OS : "linux" }, code,  function(data){
    res.send(data);
  });
});


app.get('/fullStat' , function(req , res ){
    compiler.fullStat(function(data){
        res.send(data);
    });
});

app.listen(port, function() {
  console.log('Listening at http://localhost:' + port);
});
