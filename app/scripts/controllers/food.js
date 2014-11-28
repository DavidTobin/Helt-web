'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:FoodCtrl
 * @description
 * # FoodCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('FoodCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
