// this Auth controller is responsible for our client side authentication
// in our signin/signout form using the injected Auth service
angular.module('RBKme.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {

	$scope.user = {};

	$scope.signin = function () {
	    Auth.signin($scope.user)
	      .then(function () {
	        $location.path('/profileView');
	      })
        .then(function (token) {
        $window.localStorage.setItem('com.RBKme', token);
        $location.path('/profileView');
      })
	      .catch(function (error) {
	        console.error(error);
	      });
  	};
});
