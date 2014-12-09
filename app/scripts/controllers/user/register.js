'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:UserRegisterCtrl
 * @description
 * # UserRegisterCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('UserRegisterCtrl', function ($scope, $location, User) {
    if ($scope.app.user) {
      $location.path('/dashboard');
    }

    function register (form) {
      console.log($scope.form);
      User
        .post($scope.register)
        .then(function (user) {
          $scope.app.getToken({
            email: user.email,
            password: $scope.register.password
          }).then(function () {
            $location.path('/user/account');
          });
        });
    }

    $scope.doRegister = register;
  });
