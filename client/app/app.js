angular.module('RBKme', [
  'RBKme.services',
  'RBKme.blog',
  'RBKme.profileView',
  'RBKme.profileEdit',
  'RBKme.home',
  'RBKme.d3',
  'RBKme.auth',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/home.html',
      controller: 'AuthController'
    })
    .when('/signout', {
    	templateUrl: 'app/home/home.html',
    	controller: 'AuthController'
    })
    .when('/', {
    	templateUrl: 'app/home/home.html',
    	controller: 'AuthController'
    })
    

});