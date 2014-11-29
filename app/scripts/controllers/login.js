'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('LoginCtrl', function ($scope, $location) {
    function redirect (token) {
      $location.path('/dashboard');
    }

    function login () {
      $scope.app
        .getToken($scope.app.login)
        .then(redirect);
    }

    $scope.login = login;
  });
