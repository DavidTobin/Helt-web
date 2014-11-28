'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('HelpCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
