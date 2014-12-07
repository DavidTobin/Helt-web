'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:GymFindCtrl
 * @description
 * # GymFindCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('GymFindCtrl', function ($scope, Gym) {
    $scope.gyms = Gym.getList().$object;
  });
