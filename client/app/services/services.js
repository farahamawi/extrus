angular.module('RBKme.services', [])
//authentication for users
.factory('Auth', function ($http, $location){
	
	var signin = function (user) {
    	return $http({
	    	method: 'POST',
		    url: '/api/users/signin',
		    data: user
	    })
	    .then(function (resp) {
	      return resp.data.token;
	    });
  	};
  	var signout = function () {
	    $location.path('/signin');
	};


  return {
  	signin:signin,
  	signout:signout
  };

})

.factory('Profile', function ($http){
	//get profile info from the server
	var userProfile = function(username){
		return $http({
			method: 'GET',
			url: '/api/profile',
			data:username
		})
		.then(function (resp){
			return resp
		});
	};
	// allow user to edit his profile
	var Edit = function(userInfo){
		return $http({
			method: 'POST',
			url: '/api/profile',
			data: json.stringify(userInfo)
		})
		.then (function (resp){
			return resp.data
		});
	};

	return {
		userProfile:userProfile,
		userEdit:userEdit
	}
})

.factory('Blog', function ($http){
	var blog = function(blog){
		return $http({
			method:'POST',
			url:'api/blog',
			data:blog
		})
		.then(function (resp){
			return resp.data
		});
	};
})