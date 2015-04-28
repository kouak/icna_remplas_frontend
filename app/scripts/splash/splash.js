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
  .controller('SplashController', SplashController);


function SplashController() {
  var vm = this;
  vm.stats = {
    totalUsers: 123,
    totalReplacements: 453,
    since: Date.now() - 1000*3600*24*365*2
  };
}
