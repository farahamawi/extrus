angular.module('RBKme.profileView', [])

.controller('profileViewController', function ($scope, Profile,$location) {

	$scope.data = {};
	$scope.userProfile = function () {
	    Profile.userProfile()
	      .then(function (data) {
	        $scope.data = data;
	      })
	      .catch(function (error) {
	        console.error(error);
	      });
  	};
  	$scope.editPage = function () {
  		$location.path('/profileEdit')
  	}
  	

  	
});
