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
  .controller('LoginController', LoginController);


LoginController.$inject = ['$resource', 'backendApiUrl'];
function LoginController($resource, backendApiUrl) {
  var vm = this;

}
