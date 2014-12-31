'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:UserUseridExerciseCreateCtrl
 * @description
 * # UserUseridExerciseCreateCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('UserUseridExerciseCreateCtrl', function ($scope, $location, User) {
    var Controller = {
      defaults: {
        workout: {
          date: new Date(),
          calories: 0
        }
      },

      recordWorkout: function () {
        User.one($scope.app.user.id).one('exercise').post('', $scope.workout).then(function (exercise) {
          $location.path('/user/' + $scope.app.user.id + '/exercise');
        });
      }
    };

    $scope.recordWorkout  = Controller.recordWorkout;
    $scope.workout        = Controller.defaults.workout;
  });
