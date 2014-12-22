/* global _ */

'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:UserAccountCtrl
 * @description
 * # UserAccountCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('UserAccountCtrl', function ($scope, $rootScope) {
    function updateUser () {
      console.log($scope);
      $scope.app.user
        .save()
        .then(function (user) {
          $scope.saveSuccess = true;
          $scope.app.user = user;

          _.delay(function () {
            $scope.$apply(function () {
              $scope.saveSuccess = false;
            });
          }, 2000);
        });
    }

    function onAuth () {
      var energyExpenditureOptions = [
        {
          name: 'Sedentary, little to no exercise.',
          value: 1.2
        },

        {
          name: 'Moderately active, light walking every day.',
          value: 1.375
        },

        {
          name: 'Active, gym 3 to 5 times per week.',
          value: 1.55
        },

        {
          name: 'Very active, gym 6-7 times per week.',
          value: 1.725
        },

        {
          name: 'Extremely active, train twice per day.',
          value: 1.9
        }
      ];

      $scope.energyExpenditureOption = _.findWhere(energyExpenditureOptions, {
        value: $scope.app.user.energyExpenditure
      });

      $scope.energyExpenditureOptions = energyExpenditureOptions;

      if (!$scope.$$phase) {
        $scope.$digest();
      }
    }

    $scope.updateUser               = updateUser;
    $scope.saveSuccess              = false;

    $scope.$watch('energyExpenditureOption', function (newValue) {
      if (newValue) {
        $scope.app.user.energyExpenditure = newValue ? newValue.value : 1;
      }
    });

    if ($rootScope.user) {
      onAuth();
    }

    $rootScope.$on('auth:user', onAuth);
  });
