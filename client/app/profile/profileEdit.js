angular.module('RBKme.profileEdit', [])

.controller('profileEditController', function ($scope, Profile, $location) {
  
  	$scope.editProfile = function (){
    		$scope.newInfo = {
  			password:$scope.password,
  			email:$scope.email,
  			firstName:$scope.firstName, 
  			lastName:$scope.lastName,
  			age:$scope.age, 
  			cohortNumber:$scope.cohortNumber,
  			About:$scope.About   
    		};
        Profile.edit ($scope.newInfo)
  			.then (function (){
  				$location.path('/profileView')
  			});
  		};
  	
	  
});
