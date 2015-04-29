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


function RegisterController() {
  var vm = this;
  vm.response = {
  };
}
