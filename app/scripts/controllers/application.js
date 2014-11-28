'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ApplicationCtrl', function ($scope) {
    $scope.user = {
      name: 'David Tobin'
    };
  });
