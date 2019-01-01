var myApp = angular.module('myApp', [])
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {    
   
  var updateView=function(){
         $http.get('/employee').then(function onSuccess(res) {
          
         console.log(res.data);
          
         $scope.employees =res.data;
         $scope.employee={};

        
        setTimeout(function() {
  //your code to be executed after 1 second
  $scope.msg="";
},3000);
        });
         
  };

  updateView();
  
    $scope.addEmployee = function() {
     console.log($scope.employee.name); 
      $http.post('/employee',{key: $scope.employee}).then(function onSuccess(response) {
       if(response.data==="Invalid gender"||response.data==="A user already exists with that username or email")
       {
        $scope.msg=response.data;
       }  console.log(response);
        updateView();
      });
    };
    
    $scope.removeEmployee = function(id) {
      $http.delete('/employee/' + id).then(function onSuccess(response) {
          updateView();
      });
    };
    
    $scope.editEmployee = function(id) {
      console.log(id);

      $http.get('/employee/' + id).then(function onSuccess(response) {
       
      $scope.employee = response.data;
     });
   };
    
    $scope.updateEmployee = function() {
     console.log($scope.employee._id);
     $http.put('/employee/' + $scope.employee._id, {key:$scope.employee}).then(function onSuccess(response) {
       if(response.data==="Invalid gender"||response.data==="A user already exists with that username or email")
       {
        $scope.msg=response.data;
       }
       updateView();
     });
    };
    

}]);




