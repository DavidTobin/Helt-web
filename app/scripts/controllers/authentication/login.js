'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AuthenticationLoginCtrl
 * @description
 * # AuthenticationLoginCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('AuthenticationLoginCtrl', function ($scope, $location) {
    function redirect () {
      $location.path('/dashboard');
    }

    function handleError (err) {
      $scope.error = err;
    }

    function login () {
      $scope.app
        .getToken($scope.app.login)
        .then(redirect, handleError);
    }

    $scope.login = login;
  });
