'use strict';

/**
 * @ngdoc overview
 * @name remplacementsApp
 * @description
 * # remplacementsApp
 *
 * Main module of the application.
 */
angular
  .module('remplacementsApp')
  .controller('RegisterController', RegisterController);


RegisterController.$inject = ['$resource'];
function RegisterController($resource) {
  var vm = this;

  vm.user = {};
  
  vm.centers = []; 
  vm.teams = [];

  
  vm.loadTeams = function() {
    vm.teams = [];
    return $resource('http://localhost:1337/team', {populate: '[]', center: vm.user.center.id}).query().$promise.then(function(results) {
      vm.teams = results;
    });
  };

  vm.loadCenters = function() {
    vm.centers = [];
    return $resource('http://localhost:1337/center', {populate: '[]'}).query().$promise.then(function(results) {
      vm.centers = results;
    });
  };

}
