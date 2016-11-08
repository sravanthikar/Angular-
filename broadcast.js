 //app.controller("broadcastCtrl",function(){
app.factory('mySharedService',function($rootScope){
   var sharedService={};
   sharedService.message="";
   sharedService.val="";
   sharedService.broadcast=function(msg){
   	this.message=msg;
   	this.broadcastItem();
   };
   sharedService.broadcast1=function(msg){
   	this.val=msg;
   	this.broadcastItem1();
   };
   sharedService.broadcastItem=function(){
   	$rootScope.$broadcast('Handle');
   }
   sharedService.broadcastItem1=function(){
   	$rootScope.$broadcast('Handle1');
   }
   return sharedService;
});

app.controller('nameCtrl',function($scope,mySharedService){
  $scope.na=false;
        $scope.user=function()
        {
          $scope.na=true;
        }
   $scope.details=function(msg){
   	  mySharedService.broadcast(msg);

   }
});
app.controller('nameCtrl1',function($scope,mySharedService){
   $scope.$on('Handle',function(){
   	  $scope.msg1=mySharedService.message;
   });
   $scope.details1=function(msg){
   	  mySharedService.broadcast1(msg);
   }
});

app.controller('nameCtrl2',function($scope,mySharedService){
   $scope.$on('Handle1',function(){
   	  $scope.msg2=mySharedService.val;
   })
});
//});