'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
