'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('MainCtrl', function ($scope, User) {
    console.log(User);

    function createUser () {
      delete $scope.user.id;

      $scope.user = User.post($scope.user).$object;
    }

    function updateUser () {
      var user = User.one($scope.user.id).get().then(function (user) {
        for (var i in $scope.user) {
          user[i] = $scope.user[i];
        }

        user.put();
      });
    }

    function getUser () {
      if (!$scope.user.id) {
        return;
      }

      $scope.user = User.one($scope.user.id).get().$object;
    }

    $scope.user = {
      name: 'David',
      email: 'dtobin08@gmail.com'
    };

    $scope.createUser = createUser;
    $scope.getUser    = getUser;
    $scope.updateUser = updateUser;
  });
