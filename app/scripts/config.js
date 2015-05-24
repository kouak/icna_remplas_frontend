'use strict';

angular.module('remplacementsApp')
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/splash.html',
    controller: 'StatsController',
    controllerAs: 'vm'
  })
  .when('/login', {
    templateUrl: 'views/auth/login.html',
    controller: 'LoginController',
    controllerAs: 'vm'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController',
    controllerAs: 'vm'
  });

})
.value('backendApiUrl', 'http://localhost:3000/api/');
