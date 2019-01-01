var chalk = require('chalk');
var mongoose = require( 'mongoose' );


//var dbURI = 'mongodb://localhost/test';


var dbURI = 'mongodb://test:madhura12@ds149144.mlab.com:49144/employee';


mongoose.connect(dbURI);


mongoose.connection.on('connected', function () {
  console.log(chalk.yellow('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error',function (err) {
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});



var empSchema = new mongoose.Schema({
  
  name: {type: String, unique:true},
  email: {type: String, unique:true},
  dob: Date,
  department: String,
  age: Number,
  gender: String
});




mongoose.model( 'employee', empSchema );

