'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AuthenticationLogoutCtrl
 * @description
 * # AuthenticationLogoutCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('AuthenticationLogoutCtrl', function ($scope, Authentication) {
  	Authentication.logout($scope);
  });
