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
 		console.log(post)
  		Blog.postBlog (post)
  		.then (function (data){
  			$scope.Blog=data
		});
  	};


})
