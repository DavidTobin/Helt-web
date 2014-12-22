'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AdminUserUseridCtrl
 * @description
 * # AdminUserUseridCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('AdminUserUseridCtrl', function ($scope, $routeParams, User) {
    var userId = parseInt($routeParams.userId);

    function removeRole (role) {
      $scope.user.roles = _.without($scope.user.roles, role);

      _.defer(function () {
        $scope.user.save();
      });
    }

    function hasRole(role) {
    	return _.contains($scope.user.roles, role);
    }

    function addRole () {
      if ($scope.newRole.length) {
        $scope.user.roles.push($scope.newRole);

        $scope.user.save();
      }
    }

    $scope.user = User.one(userId).get().$object;
    $scope.removeRole = removeRole;
    $scope.addRole = addRole;
    $scope.hasRole = hasRole;
  });
