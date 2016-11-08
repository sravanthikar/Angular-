      app.controller('registrationCtrl',function($scope){
        $scope.na=false;  //first  with out enter some thing 
        $scope.pass=false;
        $scope.email1=false;
       
        $scope.user=function()
        {
          $scope.na=true;
        }
        $scope.userpswd=function(){
          $scope.pwd=true;
        }
        $scope.mail=function(){
          $scope.email1=true;
        }
        
      });
      