var mongoose = require( 'mongoose' );
var EMP = mongoose.model( 'employee' );

exports.index=function(req,res){
                    EMP.find({}, function(err,employees){ 
                      console.log("DISPLAY"+employees);
                       //emp._id = emp._id.toHexString();
                       //res.json(employees);
                       //res.json(employees);
                       //res.sendFile('/index.html',{root:'.'});
                       
                       var e=JSON.stringify(employees);
                       console.log("e"+e);
                        res.send(employees);
                 
                  
              });
              }
exports.employee=function(req,res){
               
             
                   EMP.find({}, function(err,employees){ res.send(employees);});
                     // console.log("DISPLAY"+employees.name);
                      //emp._id = emp._id.toHexString();
                     // res.json(employees);
                  //  res.render('index',{employees:JSON.stringify(employees)});
                  //res.render('index',{});
             //   var e=JSON.stringify(employees);
               //        console.log("e"+e);
               //         res.render('index',{e});
//});
              }
exports.add=function(req,res){
               
                   console.log(req.body.key);
                   var dob=req.body.key.dob;
                     
                     
    console.log("Before Registering the user");

    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    var gen=req.body.key.gender;
    if(gen=== "male"||gen=== "female" )
{
    console.log("AGE"+age);
var newemp = new EMP();
                      newemp.name= req.body.key.name;
                      newemp.email=req.body.key.email;
                      newemp.dob= req.body.key.dob;
                      newemp.department= req.body.key.department;
                      newemp.gender=req.body.key.gender;
                      newemp.age=age;

     newemp.save(function(err, savedUser) {
        if (err) {
            console.log("User already exists with that username or email");
            var message = "A user already exists with that username or email";
             res.send(message);
           return;
        } else {
          EMP.find({}, function(err,emp){
            console.log("display"+emp);
            res.send(emp);
                   // res.render('index',{employees:[emp]});
                  //res.render('index',{});
              });
        }
    });
} else {
  console.log("Invalid gender");
            var message = "Invalid gender";
            res.send(message);
           return;
}
   
}
                  //  EMP.find({}, function(err,emp){
             // });
              
exports.deletes=function(req,res){
                console.log("DELETE");
                var ID = req.params.id;
               console.log("id:"+ID);
               EMP.findOneAndDelete({ _id:ID },function(err,demp){
                EMP.find({} ,function(err,emp){
                   res.send(emp);
                  console.log("DEL"+emp);
              //   res.render('index',{e:emp});});
               });
               //EMP.deleteOne(ID, function(err,emp));
                  //  EMP.find({}, function(err,emp){
                  
              });
              }
exports.edit=function(req,res){
  console.log("EDIT");
                  //  EMP.find({}, function(err,emp){
 
                var ID = req.params.id;
                console.log("id:"+ID);
                  EMP.findById(ID, function (err, employee) {
                    console.log(employee);
                    res.send(employee);
                 //    res.render('index',{e:employee});});
                 // res.render('index',{});
              });
              }
exports.update=function(req,res){
  console.log("UPDATE");
                  //  EMP.find({}, function(err,emp){
    var gen=req.body.key.gender;
    if(gen=== "male"||gen=== "female" )
{
                    var ID = req.params.id;
                console.log("id"+ID);
                console.log(req.body.key);
    
console.log(req.body.key);
                   var dob=req.body.key.dob;
                     
                     
    console.log("Before Registering the user");

    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
                    var ID = req.params.id;
                console.log("id"+ID);
                console.log(req.body.key);
              req.body.key.age=age;
  
            var q=req.body.key;
                
                var query = { _id: ID };
EMP.findByIdAndUpdate(ID,{$set: q}, {upsert:true},function (err, employee) {
   EMP.find({}, function(err,emp){
            console.log("display"+emp);
            res.send(emp);});
                    console.log(employee);});
               //   res.render('index',{});

             // });
} else {
  console.log("Invalid gender");
            var message = "Invalid gender";
            res.send(message);
           return;
} 
              }