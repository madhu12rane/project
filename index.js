
var express = require('express');
var mongoose = require('mongoose');
var db = require('./models/db.js');
var routes = require('./routes/route.js');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public',{root:'.'}));
app.use(bodyParser.json());
//app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req , res){
res.sendFile( '/index.html',{root:'.'});
});
app.get('/employee',routes.employee);
app.post('/employee',routes.add);
app.delete('/employee/:id',routes.deletes);
app.get('/employee/:id',routes.edit);
app.put('/employee/:id',routes.update);

var port = process.env.PORT || 8080;

var server = app.listen(port, function(req, res) {
    console.log("Catch the action at http://localhost:" + port);
});