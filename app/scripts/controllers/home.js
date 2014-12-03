'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:HomeCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('HomeCtrl', function ($scope, $location, $rootScope) {
    function goToDashboard () {
      $location.path('/dashboard');
    }

    if ($rootScope.user) {
      goToDashboard();
    }
    $rootScope.$on('auth:user', function () {
      goToDashboard();
    });
  });
