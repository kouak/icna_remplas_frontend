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


RegisterController.$inject = ['$resource', 'backendApiUrl'];
function RegisterController($resource, backendApiUrl) {
  var vm = this;

  vm.user = {};
  
  vm.centers = []; 
  vm.teams = [];

  
  vm.loadTeams = function() {
    vm.teams = [];
    return $resource(backendApiUrl + '/teams', {center: vm.user.center.id}).query().$promise.then(function(results) {
      vm.teams = results;
    });
  };

  vm.loadCenters = function() {
    vm.centers = [];
    return $resource(backendApiUrl + '/centers', {}).query().$promise.then(function(results) {
      vm.centers = results;
    });
  };

}
