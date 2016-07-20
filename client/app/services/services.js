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
	      return resp.data
	    });
  	};
  	var signout = function () {
	    $window.localStorage.removeItem('com.RBKme');
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
			return resp.data
		});
	};
	// allow user to edit his profile
	var edit = function(userInfo){
		console.log(userInfo)
		return $http({
			method: 'POST',
			url: '/api/users/editProfile',
			data: userInfo
		})
		.then (function (resp){
			return resp
		});
	};

	return {
		userProfile:userProfile,
		edit:edit
	}
})

.factory('Blog', function ($http){
	
	var postBlog = function(blog){
		
		return $http({
			method:'POST',
			url:'/api/blogs',
			data:blog
		})
		.then(function (resp){
			return resp
		});
	};

	var getBlogs = function(){
		return $http({
			method:'GET',
			url:'api/blogs',
		})
		.then(function (resp){
			return resp.data
		});
	};

	return {
		postBlog:postBlog,
		getBlogs:getBlogs
	}
})