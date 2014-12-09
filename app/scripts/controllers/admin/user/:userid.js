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

    $scope.user = User.one(userId).get().$object;
  });
