'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:UserUseridExerciseCtrl
 * @description
 * # UserUseridExerciseCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('UserUseridExerciseCtrl', function ($scope, $rootScope, User, Chart) {
    var Controller = {
      defaults: {},

      getExercise: function () {
        $scope.app.user.one('exercise').getList().then(function (exercises) {
          $scope.exercises = exercises;
          $scope.chartData = Chart.convert($scope.exercises.plain(), $scope.app.user);
        });
      }
    };

    $scope.getExercise = Controller.getExercise;

    _.delay(Controller.getExercise, 500);
  });
