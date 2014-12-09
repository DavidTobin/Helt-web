'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AdminGymCtrl
 * @description
 * # AdminGymCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('AdminGymCtrl', function ($scope, Gym) {
  	$scope.gyms 	= Gym.getList().$object;
  	$scope.limit 	= 200;
  });
