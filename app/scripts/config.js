'use strict';

angular.module('remplacementsApp')
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/splash.html',
    controller: 'SplashController',
    controllerAs: 'vm'
  })
  .when('/login', {
    templateUrl: 'views/login.html'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController',
    controllerAs: 'vm'
  });

})
.value('backendUrl', 'http://localhost:1337/');
