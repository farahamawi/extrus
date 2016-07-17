angular.module('RBKme.blog', [])

.controller('BlogController', function ($scope, Blog) {
  	$scope.data = {};
	$scope.getAllBlogs = function () {
	    Blog.getBlogs()
	      .then(function (data) {
	        $scope.data = data;
	      })
	      .catch(function (error) {
	        console.error(error);
	      });
  	}, 	

 	$scope.postBlog = function (){
 		var post ={
		 	from:$scope.from,
		 	title:$scope.title,
		 	blog:$scope.text
 		};
 		//console.log(post)
  		Blog.postBlog (post)
  		.then (function (data){
  			$scope.Blog=data
		});
  	};


})
.factory('Blog', function ($http){
	var postBlog = function(blog){
		return $http({
			method:'POST',
			url:'api/blogs',
			data:blog
		})
		.then(function (resp){
			return resp
		});
	};

	var getBlogs = function(){
		return $http({
			method:'GET',
			url:'api/blog',
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
